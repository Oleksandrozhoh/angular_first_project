import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model'
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
