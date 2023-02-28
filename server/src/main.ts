import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 5000;

const start = async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => console.log(`server started on PORT = ${PORT}`));
};
start();
