import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskDescriptionComponent } from "./task-description/task-description.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserid : string = '';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserid);
  }

  onSelectUser(id: string) {
    this.selectedUserid = id;
  }
}
