import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task-form',
  standalone: false,
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private taskService = inject(TaskService);

  // new task form inputs:
  newTaskTitle: string = '';
  newTaskSummary: string = '';
  newTaskDueDate: string = '';

  onCancelAddNewTaskForm(){
    this.close.emit();
  }

  onCreateNewTask() {
    this.taskService.addTask({
      title: this.newTaskTitle,
      summary: this.newTaskSummary,
      dueDate: this.newTaskDueDate
    }, this.userId);

    this.close.emit();
  }
}
