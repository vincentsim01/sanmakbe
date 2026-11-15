import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule, ObserveInstrument } from './app.module';
import cookieParser from 'cookie-parser';
import { loadAuthConfig } from './auth/auth.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.enableShutdownHooks();

  const config = new DocumentBuilder()
    .setTitle('Sanmak API')
    .setDescription('API documentation for Sanmak Inventory Management')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  // 2. Generate Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // 3. Set Swagger URL
  SwaggerModule.setup('api/docs', app, document);

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
