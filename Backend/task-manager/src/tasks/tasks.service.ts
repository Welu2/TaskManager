import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from '../Entity/tasks';
import { CreateTaskDto } from "../dto/create-task.dto";

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create({
      ...createTaskDto,
      completed: false,
    });
    return this.taskRepository.save(task);
  }

  async complete(id: number): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    task.completed = true;
    return this.taskRepository.save(task);
  }
  
  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
