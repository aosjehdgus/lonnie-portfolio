import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  title: string;

  @Column()
  key: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  github: string;

  @Column('text', { array: true })
  summary: string[];

  @Column('text', { array: true })
  frontend: string[];

  @Column('text', { array: true })
  backend: string[];

  @Column()
  database: string;

  @Column()
  build: string;

  @Column()
  deploy: string;
}
