import { Component, input, signal } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { type NewTaskData } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userName = input.required<string>();
  userId = input.required<string>();

  isAddingTask = signal(false);

  constructor(private tasksService: TasksService) {}

  selectedUserTasks = () => {
    return this.tasksService.getUserTasks(this.userId());
  };

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
