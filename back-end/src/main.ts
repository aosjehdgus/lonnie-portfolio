import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // api 문서 이름, 부가 설명, 버전 설정
  const config = new DocumentBuilder()
    .setTitle('Profile example')
    .setDescription('The profile API description')
    .setVersion('1.0')
    .build();
  // 도메인/swagger로 api 문서 접근 가능
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3030);
}
bootstrap();
