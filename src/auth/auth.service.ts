import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { randomUUID } from 'node:crypto';
import { Prisma } from '../prisma/generated/client';
import { PrismaService } from '../prisma/prisma.service';
import { AUTH_CONFIG, type AuthConfig } from './auth.config';
import type { LoginDto, RegisterDto } from './auth.dto';
import { SESSION_TTL_SECONDS, type AuthUser } from './auth.types';

const userSelect = { id: true, email: true, role: true } as const;
const BCRYPT_ROUNDS = 12;

@Injectable()
export class AuthService implements OnModuleInit {
  private dummyHash: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    @Inject(AUTH_CONFIG) private readonly config: AuthConfig,
  ) {}

  async onModuleInit(): Promise<void> {
    this.dummyHash = await hash(randomUUID(), BCRYPT_ROUNDS);
  }

  async register(dto: RegisterDto): Promise<AuthUser> {
    this.validatePassword(dto.password);
    const passwordHash = await hash(dto.password, BCRYPT_ROUNDS);
    try {
      return await this.prisma.user.create({
        data: { email: this.normalizeEmail(dto.email), passwordHash },
        select: userSelect,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Email is already registered');
      }
      throw error;
    }
  }

  async login(dto: LoginDto): Promise<{ user: AuthUser; token: string }> {
    this.validatePassword(dto.password);
    const user = await this.prisma.user.findUnique({
      where: { email: this.normalizeEmail(dto.email) },
      select: { ...userSelect, passwordHash: true },
    });
    const valid = await compare(
      dto.password,
      user?.passwordHash ?? this.dummyHash,
    );
    if (!user || !valid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const sessionId = randomUUID();
    const token = await this.jwt.signAsync(
      { sub: user.id, sid: sessionId },
      {
        secret: this.config.jwtSecret,
        algorithm: 'HS256',
        expiresIn: SESSION_TTL_SECONDS,
      },
    );
    await this.prisma.authSession.create({
      data: {
        id: sessionId,
        userId: user.id,
        expiresAt: new Date(Date.now() + SESSION_TTL_SECONDS * 1000),
      },
    });
    return {
      user: { id: user.id, email: user.email, role: user.role },
      token,
    };
  }

  async logout(sessionId: string): Promise<void> {
    await this.prisma.authSession.deleteMany({ where: { id: sessionId } });
  }

  private normalizeEmail(email: string): string {
    return email.trim().normalize('NFC').toLowerCase();
  }

  private validatePassword(password: string): void {
    if (Buffer.byteLength(password, 'utf8') > 72) {
      throw new BadRequestException('Password must be at most 72 UTF-8 bytes');
    }
  }
}
