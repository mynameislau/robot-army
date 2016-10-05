import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CHANGE_NAME, changeNameAction } from '../actions/robots-actions';

import { Robot, Robots, AppState } from '../model/state-model';

@Component({
  selector: 'my-app',
  template: `
    <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
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
        <robot-details *ngIf="selectedRobot" [robot]="selectedRobot" (changeName)="onChangeName($event)"></robot-details>
      </div>
    </div>
  `
})
export class AppComponent {
  robotsList:Observable<Robot[]>;

  selectedRobot:Robot;

  constructor (public store:Store<AppState>) {
    this.robotsList = store.select(state => state.robots).map(robots => robots.list.toArray());
    store.subscribe(state => {
      console.log(state.robots.list.toArray);
    })
  }

  onChangeName (event:any) {
    this.store.dispatch(changeNameAction(event.name, event.id))
  }

  isSelected (robot:Robot) {
    return robot === this.selectedRobot;
  };

  select (robot:Robot) {
    this.selectedRobot = robot;
  };
};
