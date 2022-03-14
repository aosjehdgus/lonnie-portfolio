import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  private project = [];

  getAllProjects() {
    return this.project;
  }
}
