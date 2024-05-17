import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public counter: number = 0;
  counterChanged = new Subject<number>();

  public decrement() {
    this.counter--;
    this.counterChanged.next(this.counter);
  }
  public increment() {
    this.counter++;
    this.counterChanged.next(this.counter);
  }
}
