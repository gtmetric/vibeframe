/**
 * Middleware type definitions.
 */

import type { ColocRequest, ColocResponse } from "../types.ts";

export type NextFunction = () => Promise<Response>;

export type Middleware = (
  req: ColocRequest,
  res: ColocResponse,
  next: NextFunction,
) => Promise<Response>;
