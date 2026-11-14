import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { JsonWebTokenError } from 'jsonwebtoken';
import { PrismaService } from '../prisma/prisma.service';
import { AUTH_CONFIG, type AuthConfig } from './auth.config';
import { IS_PUBLIC } from './auth.decorators';
import {
  AUTH_COOKIE,
  type AuthenticatedRequest,
  type TokenPayload,
} from './auth.types';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
    @Inject(AUTH_CONFIG) private readonly config: AuthConfig,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (
      this.reflector.getAllAndOverride<boolean>(IS_PUBLIC, [
        context.getHandler(),
        context.getClass(),
      ])
    ) {
      return true;
    }

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const token: unknown = request.cookies?.[AUTH_COOKIE];
    if (typeof token !== 'string') {
      throw new UnauthorizedException();
    }

    let payload: TokenPayload;
    try {
      payload = await this.jwt.verifyAsync<TokenPayload>(token, {
        algorithms: ['HS256'],
        secret: this.config.jwtSecret,
      });
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new UnauthorizedException();
      }
      throw error;
    }
    if (!Number.isSafeInteger(payload.sub) || typeof payload.sid !== 'string') {
      throw new UnauthorizedException();
    }

    const session = await this.prisma.authSession.findFirst({
      where: {
        id: payload.sid,
        userId: payload.sub,
        expiresAt: { gt: new Date() },
      },
      select: {
        id: true,
        user: { select: { id: true, email: true, role: true } },
      },
    });
    if (!session) {
      throw new UnauthorizedException();
    }
    request.user = session.user;
    request.sessionId = session.id;
    return true;
  }
}
