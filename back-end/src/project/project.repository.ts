import { EntityRepository, Repository } from 'typeorm';
import { Project } from './project.entity';

@EntityRepository()
export class ProjectRepositoy extends Repository<Project> {}
