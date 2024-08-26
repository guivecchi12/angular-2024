import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<boolean>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  constructor(private tasksService: TasksService) {}

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDate(),
      },
      this.userId()
    );
    this.close.emit(true);
  }

  onCancel() {
    this.close.emit(true);
  }
}
