import { Injectable } from '@angular/core';
import MessageInterface from '../../util/message';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  messages: Array<MessageInterface> = [];
  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Gui',
      email: 'Gui@email.com',
      message: 'Hello World',
    });
    this.insert({
      name: 'Rachel',
      email: 'Rachel@email.com',
      message: 'Beautiful wife',
    });
    this.insert({
      name: 'Skye',
      email: 'Sky@email.com',
      message: 'Welcom to the World',
    });
  }

  insert(message: MessageInterface): void {
    this.messages.push(message);
  }

  getAllMessages(): any {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
