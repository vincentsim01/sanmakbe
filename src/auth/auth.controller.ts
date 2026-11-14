import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import type { CookieOptions, Response } from 'express';
import { Public } from './auth.decorators';
import { LoginDto, RegisterDto } from './auth.dto';
import { AuthService } from './auth.service';
import {
  AUTH_COOKIE,
  SESSION_TTL_SECONDS,
  type AuthenticatedRequest,
} from './auth.types';

const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'none',
  path: '/',
};

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Public()
  @Post('register')
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @Public()
  @Post('login')
  @HttpCode(200)
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { user, token } = await this.auth.login(dto);
    response.cookie(AUTH_COOKIE, token, {
      ...cookieOptions,
      maxAge: SESSION_TTL_SECONDS * 1000,
    });
    return user;
  }

  @Post('logout')
  @HttpCode(204)
  async logout(
    @Req() request: AuthenticatedRequest,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    await this.auth.logout(request.sessionId);
    response.clearCookie(AUTH_COOKIE, cookieOptions);
  }

  @Get('me')
  me(@Req() request: AuthenticatedRequest) {
    return request.user;
  }
}
