import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);

  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);

  intervalSignal = toSignal(this.interval$, { initialValue: 0 });

  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;

    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      subscriber.next({
        message: 'New value',
        timesExecuted,
      });
      timesExecuted++;
    }, 1000);
  });

  constructor() {
    // effect(() => {
    //   console.log('clicked button ', this.clickCount(), ' times');
    // });
  }

  ngOnInit() {
    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (val) => console.log(val),
    //   });
    const subscription = this.clickCount$.subscribe({
      next: (val) =>
        console.log('clicked button ', this.clickCount(), ' times'),
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('completed'),
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
