import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  standalone: false,
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
