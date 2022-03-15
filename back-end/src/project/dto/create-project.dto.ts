import { IsNotEmpty } from 'class-validator';
export class CreateProjectDto {
  id: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  icon: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  startDate: string;

  @IsNotEmpty()
  endDate: string;

  github?: string;

  @IsNotEmpty()
  summary: string[];

  @IsNotEmpty()
  frontend: string[];

  backend?: string[];
  database?: string;
  build?: string;
  deploy?: string;
}
