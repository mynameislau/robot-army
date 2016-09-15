import { Component } from '@angular/core';
import { IRobot } from '../model/IRobot';

const robots:IRobot[] = [
  { name: 'Bender' },
  { name: 'Roberto' },
  { name: 'Hal' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>Robot Army Manager 3000</h1>
    <ul class="card-list">
      <li *ngFor="let robot of robots" class="card-list__entry">
        <robot-card (click)="select(robot)" [robot]="robot" [selected]="isSelected(robot)"></robot-card>
      <li>
    </ul>
  `
})
export class AppComponent {
  robots:IRobot[] = robots;
  selectedRobot:IRobot;
  isSelected (robot:IRobot) {
    return robot === this.selectedRobot;
  };
  select (robot:IRobot) {
    this.selectedRobot = robot;
    console.log('cllick', this.selectedRobot);
  };
};