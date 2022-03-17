import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './project.entity';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
  async getAllProjects(): Promise<Project[]> {
    return await this.find({
      order: {
        id: 'ASC',
      },
    });
  }

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const {
      title,
      key,
      description,
      summary,
      startDate,
      endDate,
      frontend,
      backend,
      database,
      build,
      github,
      deploy,
    } = createProjectDto;

    const project = this.create({
      title,
      key,
      description,
      summary,
      startDate,
      endDate,
      frontend,
      backend,
      database,
      build,
      github,
      deploy,
    });

    await this.save(project);
    return project;
  }

  async getProjectById(id: number): Promise<Project> {
    const found = await this.findOne(id);

    if (!found) {
      throw new NotFoundException(`Cant't find Project with id: ${id}`);
    }

    return found;
  }

  async deleteProject(id: number): Promise<void> {
    const result = await this.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Project with Id : ${id}`);
    }
  }

  async updateProjectTitle(id: number, title: string): Promise<Project> {
    const project = await this.getProjectById(id);

    project.title = title;
    await this.save(project);

    return project;
  }

  async updateProject(
    id: number,
    updateProejctDto: UpdateProjectDto,
  ): Promise<Project> {
    const project = await this.getProjectById(id);

    const {
      title,
      key,
      description,
      summary,
      startDate,
      endDate,
      frontend,
      backend,
      database,
      build,
      github,
      deploy,
    } = updateProejctDto;

    project.title = title;
    project.key = key;
    project.description = description;
    project.summary = summary;
    project.startDate = startDate;
    project.endDate = endDate;
    project.frontend = frontend;
    project.backend = backend;
    project.database = database;
    project.build = build;
    project.github = github;
    project.deploy = deploy;

    await this.save(project);

    return project;
  }
}
