import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), ProjectModule],
})
export class AppModule {}
