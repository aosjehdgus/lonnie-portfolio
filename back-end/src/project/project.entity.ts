import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  icon: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  startDate: number;

  @Column()
  endDate: number;

  @Column()
  github: string;

  @Column()
  summary: string[];

  @Column()
  frontend: string[];

  @Column()
  backend: string[];

  @Column()
  database: string;

  @Column()
  build: string;

  @Column()
  deploy: string;
}
