import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, Logger } from '@nestjs/common';
import * as socketio from 'socket.io';


async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api');  
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(configService.get('PORT') || 3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
