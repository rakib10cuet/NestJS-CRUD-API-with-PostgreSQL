import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //for set global prefix
  app.setGlobalPrefix('api');

  await app.listen(4000);
}
bootstrap();
