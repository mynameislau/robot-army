import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RobotsService } from '../services/robots.service';

import { Robot, Robots, AppState } from '../model/state-model';

@Component({
  selector: 'dashboard',
  template: `
    <div class="panels">
      <div class="panels__main">
        <h1>Robot Army Manager 3000</h1>
        <ul class="card-list">
          <li *ngFor="let robot of robotsList|async" class="card-list__entry">
            <robot-card (click)="service.select(robot.id)" [robot]="robot"></robot-card>
          <li>
        </ul>
        <button (click)="service.createRobot()">Créer un robot</button>
      </div>
      <div class="panels__side">
        <robot-details *ngIf="selectedRobot|async" [robot]="selectedRobot|async" (changeName)="service.onChangeName($event)" (delete)="service.deleteRobot($event)"></robot-details>
      </div>
    </div>
  `
})
export class DashboardComponent {
  robotsList:Observable<Robot[]>;
  selectedRobot:Observable<Robot>;
  service:RobotsService;

  constructor (robotsService:RobotsService) {
    this.service = robotsService;
    this.robotsList = robotsService.getRobotsList();
    this.selectedRobot = robotsService.getSelectedRobot();
  }
};
