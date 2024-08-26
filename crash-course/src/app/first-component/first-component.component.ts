import { Component } from '@angular/core';
import MessageInterface from '../../util/message';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss',
})
export class FirstComponentComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<MessageInterface> = [];

  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
    console.log(this.messages);
  }

  deleteMessage(index: number): void {
    this.service.deleteMessage(index);
    this.isSubmitted = this.messages.length > 0;
  }
}
