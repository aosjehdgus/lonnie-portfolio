import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3030;
  // api 문서 이름, 부가 설명, 버전 설정
  const config = new DocumentBuilder()
    .setTitle(`Lonnie's portfolio`)
    .setDescription('This is my portfolio API description')
    .setVersion('1.0')
    .build();
  // 도메인/swagger로 api 문서 접근 가능
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(port);
  Logger.log(`Application running on port: ${port}`);
}
bootstrap();
