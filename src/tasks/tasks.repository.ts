import { Injectable } from '@nestjs/common';
import { ITasksRepository } from './interfaces/tasks-repository.interface';

@Injectable()
export class TasksRepository implements ITasksRepository {
  private tasks: { id: number; title: string }[] = [
    {
      id: 1,
      title: 'Aprender NestJS',
    },
    {
      id: 2,
      title: 'Crear una API',
    },
  ];

  getTasks() {
    return this.tasks;
  }

  createTask(task: { title: string }) {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: task.title,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTask(id: number, task: { title: string }) {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...task };
      return this.tasks[taskIndex];
    }
    throw new Error('Task not found');
  }
}
