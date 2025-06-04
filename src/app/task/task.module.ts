import { NgModule } from "@angular/core";
import { TaskDescriptionComponent } from "./task.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { AddTaskFormComponent } from "./add-task-form/add-task-form.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TaskDescriptionComponent, TaskItemComponent, AddTaskFormComponent],
  imports: [SharedModule, CommonModule, FormsModule],
  exports: [TaskDescriptionComponent],
})
export class TaskModule {}