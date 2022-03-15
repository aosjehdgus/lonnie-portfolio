import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.entity';
import { ProjectRepository } from './project.repository';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectRepository)
    private projectRepository: ProjectRepository,
  ) {}

  getAllProjects(): Promise<Project[]> {
    return this.projectRepository.getAllProjects();
  }

  createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectRepository.createProject(createProjectDto);
  }

  getProjectById(id: number): Promise<Project> {
    return this.projectRepository.getProjectById(id);
  }

  deleteProject(id: number): Promise<void> {
    return this.projectRepository.deleteProject(id);
  }

  updateProjectTitle(id: number, title: string): Promise<Project> {
    return this.projectRepository.updateProjectTitle(id, title);
  }
}
