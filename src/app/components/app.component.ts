import { Component } from '@angular/core';
import { IRobot } from '../model/IRobot';

@Component({
  selector: 'my-app',
  template: `
  <h1>Robot Army Manager 3000</h1>
  <robot-card [robot]="robot"></robot-card>
  `
})
export class AppComponent {
  robot:IRobot = {
    name: 'Bender'
  };
};