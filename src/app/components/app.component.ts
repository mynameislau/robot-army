import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {
  changeNameAction,
  setSelectedAction,
  createAction,
  deleteAction
} from '../actions/robots-actions';

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
            <robot-card (click)="select(robot.id)" [robot]="robot"></robot-card>
          <li>
        </ul>
        <button (click)="createRobot()">Créer un robot</button>
      </div>
      <div class="panels__side">
        <robot-details *ngIf="selectedRobot|async" [robot]="selectedRobot|async" (changeName)="onChangeName($event)" (delete)="deleteRobot($event)"></robot-details>
      </div>
    </div>
  `
})
export class AppComponent {
  robotsList:Observable<Robot[]>;
  selectedRobot:Observable<Robot>;

  constructor (public store:Store<AppState>) {
    this.robotsList = store.select(state => state.robots).map(robots => robots.list.toArray());
    this.selectedRobot = store.select(state => state.robots.getSelectedRobot());
  }

  onChangeName (event:any) {
    this.store.dispatch(changeNameAction(event.name, event.id));
  }

  createRobot () {
    this.store.dispatch(createAction(null));
  }

  deleteRobot (event:any) {
    this.store.dispatch(deleteAction(event.id));
  }

  select (id:string) {
    this.store.dispatch(setSelectedAction(id));
  };
};