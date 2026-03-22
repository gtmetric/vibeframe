/**
 * Route matcher — matches a URL path against the route table.
 *
 * Iterates sorted routes (most specific first) and returns the first match
 * with extracted parameters.
 */

import type { Route, RouteMatch } from "./types.ts";

/** Try to match a single route against a URL path */
function tryMatch(route: Route, pathSegments: string[]): Record<string, string> | null {
  const params: Record<string, string> = {};

  for (let i = 0; i < route.segments.length; i++) {
    const seg = route.segments[i];

    if (seg.type === "static") {
      if (pathSegments[i] !== seg.value) return null;
    } else if (seg.type === "dynamic") {
      if (i >= pathSegments.length) return null;
      params[seg.name] = pathSegments[i];
    } else if (seg.type === "catchall") {
      // Catch-all consumes all remaining segments
      if (i >= pathSegments.length) return null;
      params[seg.name] = pathSegments.slice(i).join("/");
      return params; // Catch-all always matches the rest
    }
  }

  // If the route has no catch-all, segment counts must match exactly
  if (route.segments.length !== pathSegments.length) return null;

  return params;
}

/** Match a URL path against the route table. Returns the first match or null. */
export function matchRoute(routes: Route[], pathname: string): RouteMatch | null {
  // Normalize: remove trailing slash, split into segments
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const pathSegments = normalized === "/" ? [] : normalized.slice(1).split("/");

  for (const route of routes) {
    // Empty segments = root route
    if (route.segments.length === 0 && pathSegments.length === 0) {
      return { route, params: {} };
    }

    const params = tryMatch(route, pathSegments);
    if (params !== null) {
      return { route, params };
    }
  }

  return null;
}
