import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskDescriptionComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskDescriptionComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserid?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserid);
  }

  onSelectUser(id: string) {
    this.selectedUserid = id;
  }
}
