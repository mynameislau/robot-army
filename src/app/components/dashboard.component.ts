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
          <li *ngFor="let robot of robotsList$|async" class="card-list__entry">
            <robot-card (click)="service.selectRobot(robot.id)" [robot]="robot"></robot-card>
          <li>
        </ul>
        <button (click)="service.createRobot()">Créer un robot</button>
      </div>
      <div class="panels__side">
        <robot-details
        *ngIf="selectedRobot$|async"
        [robot]="selectedRobot$|async"
        (changeName)="service.changeRobotName($event.name, $event.id)"
        (delete)="service.deleteRobot($event.id)"></robot-details>
      </div>
    </div>
  `
})
export class DashboardComponent {
  robotsList$:Observable<Robot[]>;
  selectedRobot$:Observable<Robot>;

  constructor (private service:RobotsService) {
    this.robotsList$ = this.service.getRobotsList();
    this.selectedRobot$ = this.service.getSelectedRobot();
  }
};
