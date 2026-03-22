/**
 * Route scanner — reads the routes/ directory and builds a route table.
 *
 * Directory-based routing (routes/):
 *   routes/index/page.tsx        → /
 *   routes/about/page.tsx        → /about
 *   routes/blog/[slug]/page.tsx  → /blog/:slug
 *
 * Each route directory can contain:
 *   page.tsx      — UI component (required)
 *   loader.ts     — GET data fetching (optional)
 *   action.ts     — POST/PUT/DELETE mutations (optional)
 *   schema.ts     — Data schema (optional)
 *   _middleware.ts — Route-scoped middleware (optional)
 *
 * Falls back to flat pages/ directory for backward compatibility.
 */

import { resolve, relative, dirname, join } from "path";
import { existsSync } from "fs";
import type { Route, Segment } from "./types.ts";
import { routeInvalidParam } from "../errors.ts";

function parseSegment(part: string): Segment {
  if (part.startsWith("[...") && part.endsWith("]")) {
    const name = part.slice(4, -1);
    if (!/^[a-zA-Z0-9]+$/.test(name)) throw routeInvalidParam(name, part);
    return { type: "catchall", name };
  }
  if (part.startsWith("[") && part.endsWith("]")) {
    const name = part.slice(1, -1);
    if (!/^[a-zA-Z0-9]+$/.test(name)) throw routeInvalidParam(name, part);
    return { type: "dynamic", name };
  }
  return { type: "static", value: part };
}

/** Check if a sibling file exists with any of the given extensions */
function findSibling(dir: string, baseName: string): string | null {
  for (const ext of [".ts", ".tsx", ".js", ".jsx"]) {
    const path = join(dir, baseName + ext);
    if (existsSync(path)) return path;
  }
  return null;
}

function routeScore(route: Route): number {
  let score = 0;
  for (const seg of route.segments) {
    if (seg.type === "static") score += 3;
    else if (seg.type === "dynamic") score += 2;
    else score += 1;
  }
  return score;
}

/** Scan directory-based routes (routes/) */
async function scanDirectoryRoutes(routesDir: string): Promise<Route[]> {
  const absoluteRoutesDir = resolve(routesDir);
  const glob = new Bun.Glob("**/page.{tsx,ts,jsx,js}");
  const routes: Route[] = [];

  for await (const file of glob.scan({ cwd: absoluteRoutesDir })) {
    const pagePath = resolve(absoluteRoutesDir, file);
    const routeDir = dirname(pagePath);
    const relDir = relative(absoluteRoutesDir, routeDir);

    // Convert directory path to URL segments
    const parts = relDir === "." ? [] : relDir.split("/");
    // Remove "index" from the end — routes/index/page.tsx → /
    const urlParts = parts.at(-1) === "index" ? parts.slice(0, -1) : parts;
    const segments = urlParts.map(parseSegment);

    const pattern = "/" + segments.map((seg) => {
      if (seg.type === "static") return seg.value;
      if (seg.type === "dynamic") return `:${seg.name}`;
      return `:${seg.name}+`;
    }).join("/");

    routes.push({
      pattern: pattern === "/" ? "/" : pattern,
      segments,
      isDynamic: segments.some((s) => s.type !== "static"),
      pagePath,
      loaderPath: findSibling(routeDir, "loader"),
      actionPath: findSibling(routeDir, "action"),
      schemaPath: findSibling(routeDir, "schema"),
      middlewarePath: findSibling(routeDir, "_middleware"),
      filePath: pagePath,
    });
  }

  return routes;
}

/** Scan flat file-based routes (pages/) — backward compatibility */
async function scanFlatRoutes(pagesDir: string): Promise<Route[]> {
  const absolutePagesDir = resolve(pagesDir);
  const glob = new Bun.Glob("**/*.{tsx,ts,jsx,js}");
  const routes: Route[] = [];

  for await (const file of glob.scan({ cwd: absolutePagesDir })) {
    const fileName = file.split("/").pop() ?? "";
    if (fileName.startsWith("_")) continue;

    const filePath = resolve(absolutePagesDir, file);
    let rel = relative(absolutePagesDir, filePath).replace(/\.(tsx|ts|jsx|js)$/, "");
    rel = rel.replace(/\/index$/, "").replace(/^index$/, "");

    const parts = rel ? rel.split("/") : [];
    const segments = parts.map(parseSegment);

    const pattern = "/" + segments.map((seg) => {
      if (seg.type === "static") return seg.value;
      if (seg.type === "dynamic") return `:${seg.name}`;
      return `:${seg.name}+`;
    }).join("/");

    routes.push({
      pattern: pattern === "/" ? "/" : pattern,
      segments,
      isDynamic: segments.some((s) => s.type !== "static"),
      pagePath: filePath,
      loaderPath: null,
      actionPath: null,
      schemaPath: null,
      middlewarePath: null,
      filePath,
    });
  }

  return routes;
}

/** Scan routes — prefers routes/ directory, falls back to pages/ */
export async function scanRoutes(routesDir: string, pagesDir?: string): Promise<Route[]> {
  let routes: Route[];

  if (existsSync(resolve(routesDir))) {
    routes = await scanDirectoryRoutes(routesDir);
  } else if (pagesDir && existsSync(resolve(pagesDir))) {
    routes = await scanFlatRoutes(pagesDir);
  } else {
    return [];
  }

  // Sort by specificity
  routes.sort((a, b) => {
    const scoreA = routeScore(a);
    const scoreB = routeScore(b);
    if (scoreB !== scoreA) return scoreB - scoreA;
    if (b.segments.length !== a.segments.length) return b.segments.length - a.segments.length;
    return a.pattern.localeCompare(b.pattern);
  });

  return routes;
}
