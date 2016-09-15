import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IRobot, IRobots, IAppState } from '../model/state-interfaces';

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

  constructor (public store:Store<IAppState>) {
    this.robotsList = store.select(state => state.robots).map(robots => robots.list);
  }

  isSelected (robot:IRobot) {
    return robot === this.selectedRobot;
  };
  select (robot:IRobot) {
    this.selectedRobot = robot;
    console.log('cllick', this.selectedRobot);
  };
};