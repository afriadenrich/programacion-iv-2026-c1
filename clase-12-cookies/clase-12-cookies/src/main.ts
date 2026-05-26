import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  app.use(cookieParser());

  app.enableCors({
    origin: 'http://localhost:4200', // El cors con la wildcard (*, comodín) NO funciona con cookies
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
