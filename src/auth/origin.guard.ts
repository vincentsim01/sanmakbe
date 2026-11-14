import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import type { Request } from 'express';
import { AUTH_CONFIG, type AuthConfig } from './auth.config';

@Injectable()
export class OriginGuard implements CanActivate {
  constructor(@Inject(AUTH_CONFIG) private readonly config: AuthConfig) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
      return true;
    }
    if (request.get('origin') !== this.config.clientOrigin) {
      throw new ForbiddenException('Untrusted request origin');
    }
    return true;
  }
}
