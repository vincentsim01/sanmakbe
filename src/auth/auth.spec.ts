import {
  Controller,
  Get,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import cookieParser from 'cookie-parser';
import request from 'supertest';
import { Prisma, Role } from '../prisma/generated/client';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsController } from '../products/products.controller';
import { ProductsService } from '../products/products.service';
import { AUTH_CONFIG } from './auth.config';
import { Roles } from './auth.decorators';
import { AuthModule } from './auth.module';

const origin = 'https://frontend.example.com';

@Controller('test')
class TestController {
  @Get('admin')
  @Roles(Role.ADMIN, Role.SUPERADMIN)
  admin() {
    return 'admin';
  }

  @Get('superadmin')
  @Roles(Role.SUPERADMIN)
  superadmin() {
    return 'superadmin';
  }
}

interface UserRow {
  id: number;
  email: string;
  passwordHash: string;
  role: Role;
}

interface SessionRow {
  id: string;
  userId: number;
  expiresAt: Date;
}

describe('cookie authentication', () => {
  let app: INestApplication;
  let users: UserRow[];
  let sessions: SessionRow[];

  beforeEach(async () => {
    users = [];
    sessions = [];
    const prisma = {
      user: {
        create: ({
          data,
        }: {
          data: { email: string; passwordHash: string };
        }) => {
          if (users.some((user) => user.email === data.email)) {
            throw new Prisma.PrismaClientKnownRequestError('Duplicate email', {
              code: 'P2002',
              clientVersion: '7.10.1',
            });
          }
          const user = { id: users.length + 1, ...data, role: Role.MEMBER };
          users.push(user);
          return Promise.resolve({
            id: user.id,
            email: user.email,
            role: user.role,
          });
        },
        findUnique: ({ where }: { where: { email: string } }) =>
          Promise.resolve(
            users.find((user) => user.email === where.email) ?? null,
          ),
      },
      authSession: {
        create: ({ data }: { data: SessionRow }) => {
          sessions.push(data);
          return Promise.resolve(data);
        },
        findFirst: ({
          where,
        }: {
          where: { id: string; userId: number; expiresAt: { gt: Date } };
        }) => {
          const session = sessions.find(
            (row) =>
              row.id === where.id &&
              row.userId === where.userId &&
              row.expiresAt > where.expiresAt.gt,
          );
          const user = users.find((row) => row.id === session?.userId);
          return Promise.resolve(
            session && user
              ? {
                  id: session.id,
                  user: { id: user.id, email: user.email, role: user.role },
                }
              : null,
          );
        },
        deleteMany: ({ where }: { where: { id: string } }) => {
          const count = sessions.length;
          sessions = sessions.filter((row) => row.id !== where.id);
          return Promise.resolve({ count: count - sessions.length });
        },
      },
    };

    const module = await Test.createTestingModule({
      imports: [AuthModule],
      controllers: [TestController, ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            create: jest.fn().mockResolvedValue({ id: 1 }),
            update: jest.fn().mockResolvedValue({ id: 1 }),
            remove: jest.fn().mockResolvedValue({ id: 1 }),
          },
        },
      ],
    })
      .overrideProvider(PrismaService)
      .useValue(prisma)
      .overrideProvider(AUTH_CONFIG)
      .useValue({ jwtSecret: 'a'.repeat(32), clientOrigin: origin })
      .compile();
    app = module.createNestApplication();
    app.use(cookieParser());
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  async function registerAndLogin() {
    await request(app.getHttpServer())
      .post('/auth/register')
      .set('Origin', origin)
      .send({ email: 'Member@example.com', password: 'secure-password' })
      .expect(201)
      .expect({ id: 1, email: 'member@example.com', role: 'MEMBER' });
    const login = await request(app.getHttpServer())
      .post('/auth/login')
      .set('Origin', origin)
      .send({ email: 'member@example.com', password: 'secure-password' })
      .expect(200);
    const cookie = login.headers['set-cookie'] as string[];
    expect(cookie[0]).toContain('__Host-auth=');
    expect(cookie[0]).toContain('HttpOnly');
    expect(cookie[0]).toContain('Secure');
    expect(cookie[0]).toContain('SameSite=None');
    expect(login.body).toEqual({
      id: 1,
      email: 'member@example.com',
      role: 'MEMBER',
    });
    return cookie[0].split(';')[0];
  }

  it('registers a member, authenticates the cookie, and revokes copied tokens on logout', async () => {
    const cookie = await registerAndLogin();
    expect(users[0].passwordHash).not.toBe('secure-password');
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Cookie', cookie)
      .expect(200);
    const logout = await request(app.getHttpServer())
      .post('/auth/logout')
      .set('Origin', origin)
      .set('Cookie', cookie)
      .expect(204);
    expect(logout.headers['set-cookie'][0]).toContain('__Host-auth=;');
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Cookie', cookie)
      .expect(401);
  });

  it('applies exact roles and immediately reflects role changes', async () => {
    const cookie = await registerAndLogin();
    await request(app.getHttpServer())
      .get('/test/admin')
      .set('Cookie', cookie)
      .expect(403);
    users[0].role = Role.ADMIN;
    await request(app.getHttpServer())
      .get('/test/admin')
      .set('Cookie', cookie)
      .expect(200);
    await request(app.getHttpServer())
      .get('/test/superadmin')
      .set('Cookie', cookie)
      .expect(403);
    users[0].role = Role.SUPERADMIN;
    await request(app.getHttpServer())
      .get('/test/superadmin')
      .set('Cookie', cookie)
      .expect(200);
  });

  it('requires an authenticated admin for product writes', async () => {
    const cookie = await registerAndLogin();
    const product = {
      name: 'Socks',
      description: 'Cotton socks',
      price: 10,
      quantity: 1,
      color: 'Red',
      material: 'Cotton',
      size: 'M',
      feature: ['soft'],
    };
    const writes = [
      () => request(app.getHttpServer()).post('/products').send(product),
      () => request(app.getHttpServer()).patch('/products/1').send({ name: 'New name' }),
      () => request(app.getHttpServer()).delete('/products/1'),
    ];

    for (const write of writes) {
      await write().set('Origin', origin).expect(401);
      await write().set('Origin', origin).set('Cookie', cookie).expect(403);
    }

    users[0].role = Role.ADMIN;
    for (const [index, write] of writes.entries()) {
      await write()
        .set('Origin', origin)
        .set('Cookie', cookie)
        .expect(index === 0 ? 201 : 200);
    }
  });

  it('rejects missing or untrusted origins, privileged registration, and oversized bcrypt input', async () => {
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({})
      .expect(403);
    await request(app.getHttpServer())
      .post('/auth/register')
      .set('Origin', 'https://evil.example.com')
      .send({})
      .expect(403);
    await request(app.getHttpServer())
      .post('/auth/register')
      .set('Origin', origin)
      .send({
        email: 'a@example.com',
        password: 'password',
        role: 'SUPERADMIN',
      })
      .expect(400);
    await request(app.getHttpServer())
      .post('/auth/register')
      .set('Origin', origin)
      .send({ email: 'a@example.com', password: 'short' })
      .expect(400);
    await request(app.getHttpServer())
      .post('/auth/register')
      .set('Origin', origin)
      .send({ email: 'a@example.com', password: 12345678 })
      .expect(400);
    await request(app.getHttpServer())
      .post('/auth/register')
      .set('Origin', origin)
      .send({ email: 'a@example.com', password: 'é'.repeat(40) })
      .expect(400);
  });

  it('rejects duplicate email addresses regardless of case', async () => {
    await registerAndLogin();
    await request(app.getHttpServer())
      .post('/auth/register')
      .set('Origin', origin)
      .send({ email: 'MEMBER@example.com', password: 'secure-password' })
      .expect(409);
  });

  it('rejects invalid credentials, tampered tokens and expired sessions', async () => {
    const cookie = await registerAndLogin();
    await request(app.getHttpServer())
      .post('/auth/login')
      .set('Origin', origin)
      .send({ email: 'member@example.com', password: 'wrong-password' })
      .expect(401);
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Cookie', `${cookie}x`)
      .expect(401);
    sessions[0].expiresAt = new Date(0);
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Cookie', cookie)
      .expect(401);
  });

  it('limits repeated login attempts', async () => {
    for (let attempt = 0; attempt < 5; attempt++) {
      await request(app.getHttpServer())
        .post('/auth/login')
        .set('Origin', origin)
        .send({ email: 'missing@example.com', password: 'password' })
        .expect(401);
    }
    await request(app.getHttpServer())
      .post('/auth/login')
      .set('Origin', origin)
      .send({ email: 'missing@example.com', password: 'password' })
      .expect(429);
  });
});
