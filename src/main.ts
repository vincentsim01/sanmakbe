import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule, ObserveInstrument } from './app.module';
import cookieParser from 'cookie-parser';
import { loadAuthConfig } from './auth/auth.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.enableShutdownHooks();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.use(cookieParser());

  app.enableCors({
    origin: loadAuthConfig().clientOrigin,
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
