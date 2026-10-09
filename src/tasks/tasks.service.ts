import { Injectable } from '@nestjs/common';
import type { ITasksRepository } from './interfaces/tasks-repository.interface';
import { Inject } from '@nestjs/common';
import { TASKS_REPOSITORY } from './tasks.token';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @Inject(TASKS_REPOSITORY) private tasksRepository: ITasksRepository,
  ) {}

  getTasks() {
    return this.tasksRepository.getTasks();
  }

  createTask(createTaskDto: CreateTaskDto) {
    const task = { title: createTaskDto.title };
    return this.tasksRepository.createTask(task);
  }

  deleteTask(id: number) {
    this.tasksRepository.deleteTask(id);
  }

  updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    const task = { title: updateTaskDto.title };
    return this.tasksRepository.updateTask(id, task);
  }
}
