import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IRobot, IRobots, IAppState } from '../model/state-interfaces';

import { RobotsService } from '../services/robots.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="panels">
      <div class="panels__main">
        <h1>Robot Army Manager 3000</h1>
        <ul class="card-list">
          <li *ngFor="let robot of robotsList|async" class="card-list__entry">
            <robot-card (click)="select(robot)" [robot]="robot" [selected]="isSelected(robot)"></robot-card>
          <li>
        </ul>
      </div>
      <div class="panels__side">
        <robot-details *ngIf="selectedRobot" [robot]="selectedRobot"></robot-details>
      </div>
    </div>
  `
})
export class AppComponent {
  robotsList:Observable<IRobot[]>;

  selectedRobot:IRobot;

  constructor (robotsService:RobotsService) {
    this.robotsList = robotsService.getRobotsList();
  }

  isSelected (robot:IRobot) {
    return robot === this.selectedRobot;
  };
  select (robot:IRobot) {
    this.selectedRobot = robot;
  };
};
