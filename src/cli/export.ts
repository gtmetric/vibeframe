/**
 * vibeframe export
 *
 * Exports all static routes as HTML files to dist/.
 *
 * - Scans all routes
 * - Skips dynamic routes ([id]) unless they export getStaticPaths()
 * - Runs loaders at build time
 * - Renders each page to HTML
 * - Copies public/ assets
 * - Builds Tailwind CSS
 *
 * Output:
 *   dist/
 *     index.html
 *     about/index.html
 *     users/index.html
 *     public/
 *       app.css
 */

import { resolve, join, dirname } from "path";
import { existsSync, mkdirSync, cpSync } from "fs";
import { h } from "preact";
import renderToString from "preact-render-to-string";
import { scanRoutes } from "../router/scanner.ts";
import { wrapInDocument } from "../ssr/document.ts";
import type { VibeframeRequest } from "../types.ts";
import type { Route } from "../router/types.ts";

const outDir = resolve("dist");

/** Create a fake request for running loaders at build time */
function fakeRequest(path: string, params: Record<string, string> = {}): VibeframeRequest {
  const url = new URL(`http://localhost${path}`);
  return {
    method: "GET",
    url,
    params,
    query: Object.fromEntries(url.searchParams),
    headers: {},
    body: async () => null,
    formData: async () => new FormData(),
    raw: new Request(url.toString()),
  };
}

/** Render a single route to HTML */
async function renderRoute(
  route: Route,
  path: string,
  params: Record<string, string> = {},
): Promise<string> {
  const pageMod = await import(route.pagePath);

  if (typeof pageMod.default !== "function") {
    throw new Error(`${route.pagePath}: missing default export`);
  }

  // Run loader
  let loaderData: Record<string, any> = {};
  const loaderFn = route.loaderPath
    ? (await import(route.loaderPath)).loader
    : pageMod.loader;

  if (typeof loaderFn === "function") {
    const req = fakeRequest(path, params);
    loaderData = (await loaderFn(req)) ?? {};
  }

  const props = { params, query: {}, ...loaderData };
  const content = renderToString(h(pageMod.default, props));
  const title = props.title ?? "Vibeframe";

  const styles: string[] = [];
  if (existsSync(resolve("public/app.css"))) {
    styles.push("/app.css");
  }

  return wrapInDocument({ title, content, data: props, styles });
}

/** Write HTML to dist/<path>/index.html */
function writeHTML(urlPath: string, html: string) {
  const filePath = urlPath === "/"
    ? join(outDir, "index.html")
    : join(outDir, urlPath, "index.html");

  mkdirSync(dirname(filePath), { recursive: true });
  Bun.write(filePath, html);
}

export async function exportSite() {
  console.log("\n  Vibeframe export\n");

  // Clean dist/
  if (existsSync(outDir)) {
    const { rmSync } = await import("fs");
    rmSync(outDir, { recursive: true });
  }
  mkdirSync(outDir, { recursive: true });

  // Scan routes
  const routes = await scanRoutes("routes", "pages");

  if (routes.length === 0) {
    console.error("  No routes found.\n");
    process.exit(1);
  }

  let exported = 0;
  let skipped = 0;

  for (const route of routes) {
    if (route.isDynamic) {
      // Dynamic routes need getStaticPaths()
      const pageMod = await import(route.pagePath);

      if (typeof pageMod.getStaticPaths !== "function") {
        console.log(`  skip  ${route.pattern} (dynamic — export getStaticPaths() to generate)`);
        skipped++;
        continue;
      }

      // getStaticPaths() returns an array of param objects
      const paths: Record<string, string>[] = await pageMod.getStaticPaths();

      for (const params of paths) {
        // Build the URL from the pattern + params
        let urlPath = route.pattern;
        for (const [key, value] of Object.entries(params)) {
          urlPath = urlPath.replace(`:${key}`, value);
        }

        try {
          const html = await renderRoute(route, urlPath, params);
          writeHTML(urlPath, html);
          console.log(`  ✓  ${urlPath}`);
          exported++;
        } catch (err: any) {
          console.error(`  ✗  ${urlPath}: ${err.message}`);
        }
      }
    } else {
      // Static route — render directly
      const urlPath = route.pattern;
      try {
        const html = await renderRoute(route, urlPath);
        writeHTML(urlPath, html);
        console.log(`  ✓  ${urlPath}`);
        exported++;
      } catch (err: any) {
        console.error(`  ✗  ${urlPath}: ${err.message}`);
      }
    }
  }

  // Copy public/ assets
  const publicDir = resolve("public");
  if (existsSync(publicDir)) {
    cpSync(publicDir, join(outDir), { recursive: true });
    console.log(`  ✓  public/ assets copied`);
  }

  // Build Tailwind CSS
  const stylesDir = resolve("styles/app.css");
  if (existsSync(stylesDir)) {
    try {
      const proc = Bun.spawn(
        ["bunx", "@tailwindcss/cli", "-i", "styles/app.css", "-o", join(outDir, "app.css"), "--minify"],
        { stdout: "pipe", stderr: "pipe" }
      );
      await proc.exited;
      console.log(`  ✓  Tailwind CSS built`);
    } catch {
      console.log(`  ⚠  Tailwind CSS build failed — skipping`);
    }
  }

  console.log(`\n  Exported ${exported} page${exported !== 1 ? "s" : ""}${skipped ? `, skipped ${skipped} dynamic` : ""}`);
  console.log(`  Output: dist/\n`);
}
