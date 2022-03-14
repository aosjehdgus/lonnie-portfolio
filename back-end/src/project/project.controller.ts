import { Controller, Get } from '@nestjs/common';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get('/')
  getAllProject(): Project[] {
    return this.projectService.getAllProjects();
  }
}
