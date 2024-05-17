import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectCount, selectDouble } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss',
  imports: [CommonModule],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;
  store: Store<{ counter: number }> = inject(Store);
  constructor() {
    this.count$ = this.store.select(selectCount);
    this.doubleCount$ = this.store.select(selectDouble);
  }

  // ngOnInit(): void {
  // countS: CounterService = inject(CounterService);
  // sub: Subscription;
  //   this.sub = this.countS.counterChanged.subscribe((count: number) => {
  //     this.count = count;
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
