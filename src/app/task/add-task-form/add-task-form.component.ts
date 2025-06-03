import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task-form.model';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  @Input({ required: true }) userId!: string;
  @Output() canselNewTaskFrom = new EventEmitter<void>();
  @Output() createNewTask = new EventEmitter<NewTask>();

  // new task form inputs:
  newTaskTitle: string = '';
  newTaskSummary: string = '';
  newTaskDueDate: string = '';

  onCancelAddNewTaskForm(){
    this.canselNewTaskFrom.emit();
  }

  onCreateNewTask() {
    console.log(`Title: ${this.newTaskTitle}`);
    console.log(`Summary: ${this.newTaskSummary}`);
    console.log(`Due Date: ${this.newTaskDueDate}`);

    // Emit an event with new task data
    this.createNewTask.emit({
      title: this.newTaskTitle,
      summary: this.newTaskSummary,
      dueDate: this.newTaskDueDate
    });

    // Reset form inputs
    this.newTaskTitle = '';
    this.newTaskSummary = '';
    this.newTaskDueDate = '';
  }
}
