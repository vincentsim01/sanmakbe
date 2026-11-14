import 'dotenv/config';

export const AUTH_CONFIG = Symbol('AUTH_CONFIG');

export interface AuthConfig {
  jwtSecret: string;
  clientOrigin: string;
}

export function loadAuthConfig(): AuthConfig {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret || Buffer.byteLength(jwtSecret, 'utf8') < 32) {
    throw new Error('JWT_SECRET must be at least 32 bytes');
  }

  const clientOrigin = process.env.CLIENT_ORIGIN;
  if (!clientOrigin) {
    throw new Error('CLIENT_ORIGIN is required');
  }

  let url: URL;
  try {
    url = new URL(clientOrigin);
  } catch (error) {
    throw new Error('CLIENT_ORIGIN must be a valid HTTP(S) origin', {
      cause: error,
    });
  }
  if (
    !['http:', 'https:'].includes(url.protocol) ||
    url.origin !== clientOrigin
  ) {
    throw new Error('CLIENT_ORIGIN must be an exact HTTP(S) origin');
  }

  return { jwtSecret, clientOrigin };
}
