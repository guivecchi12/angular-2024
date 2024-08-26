import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { AppComponent } from '../../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, AppComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = signal('');
  enteredText = signal('');
  add = output<{ title: string; text: string }>();

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log('form', this.form().nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle(), text: this.enteredText() });

    this.enteredTitle.set('');
    this.enteredText.set('');
  }
}
