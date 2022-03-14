import { Injectable, NotFoundException } from '@nestjs/common';
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

  getProjectById(id: string): Project {
    const found = this.projects.find((project) => project.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find Project with id : ${id}`);
    }

    return found;
  }

  deleteProject(id: string): void {
    const found = this.getProjectById(id);
    this.projects = this.projects.filter((project) => project.id !== found.id);
  }

  updateProjectTitle(id: string, title: string): Project {
    const project = this.getProjectById(id);
    project.title = title;
    return project;
  }
}
