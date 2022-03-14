import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get('/')
  getAllProject(): Project[] {
    return this.projectService.getAllProjects();
  }

  @Post()
  createProject(@Body() createProjectDto: CreateProjectDto): Project {
    return this.projectService.createProject(createProjectDto);
  }
}
