import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.entity';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
  async getAllProjects(): Promise<Project[]> {
    return await this.find();
  }

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const {
      title,
      icon,
      image,
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
      icon,
      image,
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
}
