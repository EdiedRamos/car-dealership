import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // * configure global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      // * Remove unknown class members
      whitelist: true,
      // * This combination send a bad request cuz the
      // * requet has unknown class members
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
