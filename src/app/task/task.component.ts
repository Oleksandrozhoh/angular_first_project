import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import {type NewTask} from './add-task-form/new-task-form.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent, AddTaskFormComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskDescriptionComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  displayAddTaskForm: boolean = false;
  newTaskId: number = 10;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    console.log(`Task completed: ${taskId}`);
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onAddTaskButton(){    
    console.log(`Add task for user: ${this.userId}`);
    this.displayAddTaskForm = true;
  }

  onCanselAddNewTaskForm() {
    console.log(`Cancel add new task`)
    this.displayAddTaskForm = false;
  }

  async onCreateNewTask(newTask: NewTask) {
    // Add the new task to the tasks array
    this.tasks.unshift({
      id: `t${this.newTaskId}`,
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    });

    this.newTaskId++;

    // Reset form state
    this.displayAddTaskForm = false;

    this.tasks.forEach(task => {
      console.log(`TaskId: ${task.id} Task: ${task.title}, Due Date: ${task.dueDate}`);
    });

  }

  tasks = [
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
}
