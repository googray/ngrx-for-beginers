import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import {
  clear,
  countSelector,
  decrease,
  increase,
  updatedAtSelector,
} from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'ngNew-app';
  // counterDyn = 0;
  // updatedAt?: number;

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private store: Store) {}

  // get cannotDecrease(): boolean {
  //   return false;
  // }

  incr(): void {
    // this.updatedAt = Date.now();
    // this.counterDyn++;
    this.store.dispatch(increase());
  }
  decr(): void {
    // this.updatedAt = Date.now();
    // this.counterDyn--;
    this.store.dispatch(decrease());
  }
  clear(): void {
    // this.updatedAt = Date.now();
    // this.counterDyn = 0;
    this.store.dispatch(clear());
  }
}
