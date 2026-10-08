export interface ITasksRepository {
  getTasks(): { id: number; title: string }[];
  createTask(task: { title: string }): { id: number; title: string };
  deleteTask(id: number): void;
  updateTask(
    id: number,
    task: { title: string },
  ): { id: number; title: string };
}
