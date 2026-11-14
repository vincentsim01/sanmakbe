import type { Request } from 'express';
import type { Role } from '../prisma/generated/client';

export interface AuthUser {
  id: number;
  email: string;
  role: Role;
}

export interface AuthenticatedRequest extends Request {
  user: AuthUser;
  sessionId: string;
}

export interface TokenPayload {
  sub: number;
  sid: string;
}

export const AUTH_COOKIE = '__Host-auth';
export const SESSION_TTL_SECONDS = 8 * 60 * 60;
