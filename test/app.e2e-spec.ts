import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import cookieParser from 'cookie-parser';
import { JwtService } from '@nestjs/jwt';
import { AppModule } from './../src/app.module';
import { AUTH_CONFIG } from './../src/auth/auth.config';
import { CartService } from './../src/cart/cart.service';
import { OrderService } from './../src/order/order.service';
import { Role } from './../src/prisma/generated/client';
import { PrismaService } from './../src/prisma/prisma.service';
import { ShippingService } from './../src/shipping/shipping.service';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  let jwt: JwtService;
  let role: Role;
  const cartService = { getCart: jest.fn().mockResolvedValue({ items: [] }) };
  const orderService = { findAll: jest.fn().mockResolvedValue({ data: [] }) };
  const shippingService = { update: jest.fn().mockResolvedValue({}) };

  beforeEach(async () => {
    role = Role.MEMBER;
    jest.clearAllMocks();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue({
        authSession: {
          findFirst: jest.fn().mockImplementation(() =>
            Promise.resolve({
              id: 'session-id',
              user: { id: 1, email: 'member@example.com', role },
            }),
          ),
        },
      })
      .overrideProvider(AUTH_CONFIG)
      .useValue({
        jwtSecret: 'a'.repeat(32),
        clientOrigin: 'https://frontend.example.com',
      })
      .overrideProvider(CartService)
      .useValue(cartService)
      .overrideProvider(OrderService)
      .useValue(orderService)
      .overrideProvider(ShippingService)
      .useValue(shippingService)
      .compile();

    jwt = moduleFixture.get(JwtService);
    app = moduleFixture.createNestApplication();
    app.use(cookieParser());
    await app.init();
  });

  async function authCookie() {
    const token = await jwt.signAsync(
      { sub: 1, sid: 'session-id' },
      { secret: 'a'.repeat(32), algorithm: 'HS256' },
    );
    return `__Host-auth=${token}`;
  }

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('requires authentication for cart, checkout, orders, and shipping', async () => {
    await request(app.getHttpServer()).get('/cart').expect(401);
    await request(app.getHttpServer()).post('/checkout/summary').expect(401);
    await request(app.getHttpServer()).get('/orders/admin/all').expect(401);
    await request(app.getHttpServer())
      .get('/shipping/order/123e4567-e89b-42d3-a456-426614174000')
      .expect(401);
  });

  it('authenticates cart requests and enforces admin roles', async () => {
    const cookie = await authCookie();
    await request(app.getHttpServer()).get('/cart').set('Cookie', cookie).expect(200);
    expect(cartService.getCart).toHaveBeenCalledWith(1);

    await request(app.getHttpServer()).get('/orders/admin/all').set('Cookie', cookie).expect(403);
    await request(app.getHttpServer())
      .patch('/shipping/order/123e4567-e89b-42d3-a456-426614174000')
      .set('Cookie', cookie)
      .send({})
      .expect(403);

    role = Role.ADMIN;
    await request(app.getHttpServer()).get('/orders/admin/all').set('Cookie', cookie).expect(200);
    await request(app.getHttpServer())
      .patch('/shipping/order/123e4567-e89b-42d3-a456-426614174000')
      .set('Cookie', cookie)
      .send({})
      .expect(200);
  });

  afterEach(async () => {
    await app.close();
  });
});
