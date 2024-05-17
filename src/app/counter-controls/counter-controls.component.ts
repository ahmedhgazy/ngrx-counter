import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.scss',
})
export class CounterControlsComponent {
  constructor() {}
  store: Store = inject(Store);

  increment() {
    this.store.dispatch(increment({ value: 2 }));
  }
  decrement() {
    this.store.dispatch(decrement({ value: 2 }));
  }
}
