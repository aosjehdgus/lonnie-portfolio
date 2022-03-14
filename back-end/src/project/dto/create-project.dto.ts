import { IsNotEmpty } from 'class-validator';
export class CreateProjectDto {
  id: string;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  icon: string;
  @IsNotEmpty()
  image: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  period: string;
  github: string;
  @IsNotEmpty()
  summary: string[];
  @IsNotEmpty()
  frontend?: string[];
  backend?: string[];
  database?: string;
  build?: string[];
  deploy?: string;
}
