import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'ngNew-app';
  counterDyn = 0;
  updatedAt?: number;

  get cannotDecrease(): boolean {
    return this.counterDyn <= 0;
  }

  incr(): void {
    this.updatedAt = Date.now();
    this.counterDyn++;
  }
  decr(): void {
    this.updatedAt = Date.now();
    this.counterDyn--;
  }
  clear(): void {
    this.updatedAt = Date.now();
    this.counterDyn = 0;
  }
}
