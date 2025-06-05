import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from "../Entity/tasks";
import { TaskService } from "../tasks/tasks.service";
import { TaskController } from "../tasks/tasks.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
