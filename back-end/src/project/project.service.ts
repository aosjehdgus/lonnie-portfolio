import { Injectable } from '@nestjs/common';
import { Project } from './project.model';
import { v1 as uuid } from 'uuid';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  private projects: Project[] = [];

  getAllProjects(): Project[] {
    return this.projects;
  }

  createProject(createProjectDto: CreateProjectDto) {
    const {
      title,
      icon,
      image,
      description,
      period,
      github,
      summary,
      frontend,
      backend,
      database,
      build,
      deploy,
    } = createProjectDto;
    const project: Project = {
      id: uuid(),
      title,
      icon,
      image,
      description,
      period,
      github,
      summary,
      frontend,
      backend,
      database,
      build,
      deploy,
    };

    this.projects.push(project);
    return project;
  }
}
