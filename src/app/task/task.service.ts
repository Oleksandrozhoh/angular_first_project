import { Injectable } from "@angular/core";
import { NewTask } from "./add-task-form/new-task-form.model";

@Injectable({ providedIn: 'root' })
export class TaskService {

constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        this.tasks = JSON.parse(tasks);
    }
}

private tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]
    
    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }
    
    addTask(newTask: NewTask, userId: string) {
        this.tasks.unshift({
        id: `${new Date().getTime()}`, // Generate a unique ID based on timestamp
        userId: userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
    });
        this.saveTasks();
    }
    
    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}