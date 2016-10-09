import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { Robot, Robots, AppState } from '../model/state-model';

import {
  initAction,
  changeNameAction,
  setSelectedAction,
  createAction,
  deleteAction
} from '../actions/robots-actions';

@Injectable()
export class RobotsService {
  store:Store<AppState>

  constructor(store:Store<AppState>) {
    this.store = store;
  }

  getRobotsList ():Observable<Robot[]> {
    return this.store.select(state => state.robots).map(robots => robots.list.toArray());
  }

  getSelectedRobot ():Observable<Robot> {
    return this.store.select(state => state.robots.getSelectedRobot());
  }

  changeRobotName (name:string, id:string) {
    this.store.dispatch(changeNameAction(name, id));
  }

  createRobot () {
    this.store.dispatch(createAction(null));
  }

  deleteRobot (id:string) {
    this.store.dispatch(deleteAction(id));
  }

  selectRobot (id:string) {
    this.store.dispatch(setSelectedAction(id));
  };

  initialize ():void {
    this.store.dispatch(initAction());
  }
}
