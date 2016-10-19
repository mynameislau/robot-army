import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  changeNameAction,
  setSelectedAction,
  createAction,
  deleteAction
} from '../actions/robots-actions';

import { Robot, Robots, AppState } from '../model/state-model';

@Injectable()
export class RobotsService {

  constructor (private store:Store<AppState>) {}

  getRobotsList ():Observable<Robot[]>{
    return this.store.select(state => state.robots).map(robots => robots.list.toArray());
  }

  getSelectedRobot (id:string = null):Observable<Robot> {
    return this.store.select(state => state.robots.getSelectedRobot());
  }

  changeRobotName (name:string, id:string) {
    this.store.dispatch(changeNameAction(name, id));
  }

  createRobot () {
    this.store.dispatch(createAction());
  }

  deleteRobot (id:string) {
    this.store.dispatch(deleteAction(id));
  }

  selectRobot (id:string) {
    this.store.dispatch(setSelectedAction(id));
  };
}
