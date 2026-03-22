/**
 * Route validation — checks the routes/ tree on startup and reports issues.
 * Validates that every route has the correct structure and exports.
 */

import { resolve, relative } from "path";
import { existsSync } from "fs";
import type { Route } from "./types.ts";

interface ValidationIssue {
  level: "error" | "warn";
  route: string;
  file: string;
  message: string;
  fix: string;
}

export async function validateRoutes(routes: Route[], projectRoot: string): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = [];

  for (const route of routes) {
    const rel = (path: string) => relative(projectRoot, path);

    // Check page.tsx has a default export
    let pageMod: any = null;
    try {
      pageMod = await import(route.pagePath);
      if (typeof pageMod.default !== "function") {
        issues.push({
          level: "error",
          route: route.pattern,
          file: rel(route.pagePath),
          message: "page.tsx does not have a default export function",
          fix: `Add "export default function PageName(props) { ... }" to ${rel(route.pagePath)}`,
        });
      }
    } catch (err) {
      issues.push({
        level: "error",
        route: route.pattern,
        file: rel(route.pagePath),
        message: `Failed to import page: ${err instanceof Error ? err.message : String(err)}`,
        fix: `Check ${rel(route.pagePath)} for syntax errors`,
      });
    }

    // Check loader.ts exports a loader function
    if (route.loaderPath) {
      try {
        const loaderMod = await import(route.loaderPath);
        if (typeof loaderMod.loader !== "function") {
          issues.push({
            level: "error",
            route: route.pattern,
            file: rel(route.loaderPath),
            message: "loader file does not export a 'loader' function",
            fix: `Add "export async function loader(req) { return { ... }; }" to ${rel(route.loaderPath)}`,
          });
        }
      } catch (err) {
        issues.push({
          level: "error",
          route: route.pattern,
          file: rel(route.loaderPath),
          message: `Failed to import loader: ${err instanceof Error ? err.message : String(err)}`,
          fix: `Check ${rel(route.loaderPath)} for syntax errors`,
        });
      }
    }

    // Check action.ts exports an action function
    if (route.actionPath) {
      try {
        const actionMod = await import(route.actionPath);
        if (typeof actionMod.action !== "function") {
          issues.push({
            level: "error",
            route: route.pattern,
            file: rel(route.actionPath),
            message: "action file does not export an 'action' function",
            fix: `Add "export async function action(req) { return { redirect: '...' }; }" to ${rel(route.actionPath)}`,
          });
        }
      } catch (err) {
        issues.push({
          level: "error",
          route: route.pattern,
          file: rel(route.actionPath),
          message: `Failed to import action: ${err instanceof Error ? err.message : String(err)}`,
          fix: `Check ${rel(route.actionPath)} for syntax errors`,
        });
      }
    }

    // Check for single-file loader/action exports on the page module
    const hasLoader = route.loaderPath || typeof pageMod?.loader === "function";
    const hasAction = route.actionPath || typeof pageMod?.action === "function";

    // Warn if action exists without a loader (form pages usually need data)
    if (hasAction && !hasLoader) {
      issues.push({
        level: "warn",
        route: route.pattern,
        file: route.actionPath ? rel(route.actionPath) : rel(route.pagePath),
        message: "Route has an action but no loader",
        fix: `Consider adding a loader function to load data for the form`,
      });
    }

    // Warn if dynamic route has no loader (usually needs param-based data)
    if (route.isDynamic && !hasLoader) {
      issues.push({
        level: "warn",
        route: route.pattern,
        file: rel(route.pagePath),
        message: "Dynamic route has no loader — params won't be used for data fetching",
        fix: `Add a loader function that uses req.params to fetch data`,
      });
    }
  }

  return issues;
}

/** Print validation results to console */
export function printValidation(issues: ValidationIssue[]): void {
  if (issues.length === 0) {
    console.log("  ✓ All routes valid\n");
    return;
  }

  const errors = issues.filter((i) => i.level === "error");
  const warns = issues.filter((i) => i.level === "warn");

  if (errors.length > 0) {
    console.log(`\n  Route validation: ${errors.length} error(s), ${warns.length} warning(s)\n`);
    for (const issue of errors) {
      console.log(`  [ERROR] ${issue.route} (${issue.file})`);
      console.log(`    ${issue.message}`);
      console.log(`    Fix: ${issue.fix}\n`);
    }
  }

  if (warns.length > 0) {
    for (const issue of warns) {
      console.log(`  [WARN] ${issue.route} (${issue.file})`);
      console.log(`    ${issue.message}`);
      console.log(`    Fix: ${issue.fix}\n`);
    }
  }
}
