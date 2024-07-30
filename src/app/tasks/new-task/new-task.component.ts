import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() closeDialog = new EventEmitter<void>();
  newTitle = "";
  newSummary = "";
  newDueDate = "";

  private taskService = inject(TasksService); // Alternative to the ctor approach

  onCancelDialog() {
    this.closeDialog.emit();
  }

  onSumbitTask() {
    this.taskService.addTask({
      title: this.newTitle,
      summary: this.newSummary,
      date: this.newDueDate
    }, this.userId);

    this.closeDialog.emit();
  }
}
