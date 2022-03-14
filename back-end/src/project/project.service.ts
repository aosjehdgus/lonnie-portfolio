import { Injectable } from '@nestjs/common';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  private project: Project[] = [];

  getAllProjects(): Project[] {
    return this.project;
  }
}
