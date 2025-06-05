import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("Task")
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  completed: boolean;
}
