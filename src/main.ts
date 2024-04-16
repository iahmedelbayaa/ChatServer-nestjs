import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api');
  await app.listen(configService.get('PORT') || 3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
