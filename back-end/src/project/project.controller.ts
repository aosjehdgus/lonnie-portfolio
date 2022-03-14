import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  getAllProject(): Project[] {
    return this.projectService.getAllProjects();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createProject(@Body() createProjectDto: CreateProjectDto): Project {
    return this.projectService.createProject(createProjectDto);
  }

  @Get('/:id')
  getProjectById(@Param('id') id: string): Project {
    return this.projectService.getProjectById(id);
  }

  @Delete('/:id')
  deleteProject(@Param('id') id: string): void {
    return this.projectService.deleteProject(id);
  }

  @Patch('/:id/title')
  updateProjectTitle(@Param('id') id: string, @Body('title') title: string) {
    return this.projectService.updateProjectTitle(id, title);
  }
}
