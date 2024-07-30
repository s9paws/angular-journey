import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Task } from '../../models/task.model';

import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type AddNewTask } from '../../models/add-new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgIf, NgFor, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId); 
  }

  onCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTaskDialog() {
    this.isAddingTask = false;
  }
}
