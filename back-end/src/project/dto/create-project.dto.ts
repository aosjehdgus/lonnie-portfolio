export class CreateProjectDto {
  id: string;
  title: string;
  icon: object;
  image: string;
  description: string;
  period: string;
  github: string;
  summary: string[];
  frontend?: string[];
  backend?: string[];
  database?: string;
  build?: string[];
  deploy?: string;
}
