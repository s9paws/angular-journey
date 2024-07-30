import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NgIf, NgFor, HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  selectedUserId?: string;
  users = DUMMY_USERS;
  
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
