/**
 * CSRF token generation and validation.
 * Tokens are stored in memory (single-process Bun server).
 */

const tokens = new Map<string, number>();

// Clean expired tokens every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [token, expiry] of tokens) {
    if (expiry < now) tokens.delete(token);
  }
}, 5 * 60 * 1000);

/** Generate a new CSRF token (valid for 1 hour) */
export function generateCSRFToken(): string {
  const token = crypto.randomUUID();
  tokens.set(token, Date.now() + 60 * 60 * 1000);
  return token;
}

/** Validate and consume a CSRF token */
export function validateCSRFToken(token: string | null): boolean {
  if (!token) return false;
  const expiry = tokens.get(token);
  if (!expiry) return false;
  tokens.delete(token); // One-time use
  return Date.now() < expiry;
}
