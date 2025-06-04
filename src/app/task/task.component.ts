import { Component, Input} from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskDescriptionComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  displayAddTaskForm: boolean = false;

  // angular dependency injection
  constructor(private taskService: TaskService) {} 

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onAddTaskButton(){    
    console.log(`Add task for user: ${this.userId}`);
    this.displayAddTaskForm = true;
  }

  onCloseAddNewTaskForm() {
    console.log(`Cancel add new task`)
    this.displayAddTaskForm = false;
  }
}
