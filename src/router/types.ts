/**
 * Router type definitions.
 */

export type Segment =
  | { type: "static"; value: string }
  | { type: "dynamic"; name: string }
  | { type: "catchall"; name: string };

export interface Route {
  /** URL pattern, e.g., "/blog/:slug" */
  pattern: string;
  /** Parsed segments for matching */
  segments: Segment[];
  /** Whether this route has any dynamic segments */
  isDynamic: boolean;
  /** Path to page component (required) */
  pagePath: string;
  /** Path to loader file (optional) */
  loaderPath: string | null;
  /** Path to action file (optional) */
  actionPath: string | null;
  /** Path to schema file (optional) */
  schemaPath: string | null;
  /** Path to middleware file (optional) */
  middlewarePath: string | null;
  /** @deprecated Use pagePath instead */
  filePath: string;
}

export interface RouteMatch {
  route: Route;
  params: Record<string, string>;
}
