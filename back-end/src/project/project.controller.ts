import {
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  Controller,
  UsePipes,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectTitleValidationPipe } from './pipes/project-title-validation.pipe';
import { Project } from './project.entity';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}
  @Get()
  getAllProject(): Promise<Project[]> {
    return this.projectService.getAllProjects();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createProject(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectService.createProject(createProjectDto);
  }

  @Get('/:id')
  getProjectById(@Param('id') id: number): Promise<Project> {
    return this.projectService.getProjectById(id);
  }

  @Delete('/:id')
  deleteProject(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.projectService.deleteProject(id);
  }
  @Patch('/:id/title')
  updateProjectTitle(
    @Param('id', ParseIntPipe) id: number,
    @Body('title', ProjectTitleValidationPipe) title: string,
  ) {
    return this.projectService.updateProjectTitle(id, title);
  }
  // @Patch('/:id/title')
  // updateProjectTitle(
  //   @Param('id') id: string,
  //   @Body('title', ProjectTitleValidationPipe) title: string,
  // ) {
  //   return this.projectService.updateProjectTitle(id, title);
  // }
}
