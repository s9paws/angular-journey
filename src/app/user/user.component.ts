import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { type User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() selectedUser = new EventEmitter<string>();
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
