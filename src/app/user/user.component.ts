import { Component, Input, Output, EventEmitter, signal, computed, input } from '@angular/core';
import { User } from './user.model';

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

  // @Input() decorator allows the parent component to pass data to this component.
  //@Input({required: true}) avatar!: string; // if using signals, you can use `input` instead of `@Input` like so: avatar = input.required<string>();
  //@Input({required: true}) name!: string;
  //@Input({required: true}) id!: string;

  @Input({required: true}) user!: User; // if using signals, you can use `input` like so: user = input.required<User>();
  @Input({required: true}) selected!: boolean; // if using signals, you can use `input` like so: selected = input.required<boolean>();

  // @Output() decorator allows this component to emit custom events to the parent components.
  @Output() select = new EventEmitter<string>();  // if using signals, you can use `output` like so: select = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`; // if using signals, you can use `computed` like so: imagePath = computed(() => `assets/users/${this.user()?.avatar}`);
  } // if using signals, you can use `computed` like so: imagePath = computed(() => `assets/users/${this.avatar}`);
  
  onSelectUser(){
    this.select.emit(this.user.id); // Emit the id of the selected user to the parent component.
    if (this.selected) {
      console.log('User already selected:', this.user.name);
    }
  }
}
