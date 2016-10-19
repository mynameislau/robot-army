import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Robot, Robots } from '../model/state-model';
import { RobotsService } from '../services/robots.service';

@Component({
  selector: 'my-app',
  template: `
    <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
    <div class="panels">
      <div class="panels__main">
        <h1>Robot Army Manager 3000</h1>
        <ul class="card-list">
          <li *ngFor="let robot of robotsList|async" class="card-list__entry">
            <robot-card (click)="select(robot.id)" [robot]="robot" [selected]="isSelected(robot.id)"></robot-card>
          <li>
        </ul>
      </div>
      <div class="panels__side">
        <robot-details *ngIf="selectedRobot|async" [robot]="selectedRobot|async" (changeName)="onChangeName($event.name, $event.id)"></robot-details>
      </div>
    </div>
  `
})
export class AppComponent {
  robotsList:Observable<Robot[]>;

  selectedRobotID:string;
  selectedRobot:Observable<Robot>;

  constructor (private service:RobotsService) {
    this.robotsList = this.service.getRobotsList();
  }

  onChangeName (name:string, id:string) {
    this.service.changeRobotName(name, id);
  }

  isSelected (id:string):Boolean {
    return id === this.selectedRobotID;
  };

  select (robotID:string) {
    this.selectedRobotID = robotID;
    this.selectedRobot = this.service.getRobot(robotID);
  };
};
