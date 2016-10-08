import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Robot, Robots, AppState } from '../model/state-model';
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
            <robot-card (click)="service.selectRobot(robot.id)" [robot]="robot"></robot-card>
          <li>
        </ul>
        <button (click)="createRobot()">Créer un robot</button>
      </div>
      <div class="panels__side">
        <robot-details
        *ngIf="selectedRobot|async"
        [robot]="selectedRobot|async"
        (changeName)="service.changeRobotName($event.name, $event.id)"
        (delete)="service.deleteRobot($event.id)"></robot-details>
      </div>
    </div>
  `
})
export class AppComponent {
  robotsList:Observable<Robot[]>;
  selectedRobot:Observable<Robot>;

  constructor (private service:RobotsService) {
    this.robotsList = service.getRobotsList();
    this.selectedRobot = service.getSelectedRobot();
  }
};
