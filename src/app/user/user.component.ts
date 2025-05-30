import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; 

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// export class UserComponent {
//   //Concept: Property Binding / Data Binding
//   //Makes selectedUser available in the HTML template.
//   selectedUser = DUMMY_USERS[randomUserIndex];

//   // Concept: Getter method
//   // Returns the image path for the selected user. You can use this directly in the HTML.
//   get imagePath(): string {
//     return `assets/users/${this.selectedUser.avatar}`
//   }

//   // Concept: Event Binding
//   // Triggered when a button is clicked. It picks a new random user and updates selectedUser.
//   onSelectUser(){
//     console.log('User button clicked');
//     this.selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
//   }
// }

// Using signals for state management
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomUserIndex]);

  // image path is a computed signal which will be recomputed whenever selectedUser changes
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  onSelectUser(){
    console.log('User button clicked');
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  }
}
