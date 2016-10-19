import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeNameAction } from '../actions/robots-actions';

import { Robot, Robots, AppState } from '../model/state-model';

@Injectable()
export class RobotsService {

  constructor (private store:Store<AppState>) {}

  getRobotsList ():Observable<Robot[]>{
    return this.store.select(state => state.robots.list.toArray());
  }

  changeRobotName (name:string, id:string) {
    this.store.dispatch(changeNameAction(name, id));
  }

  getRobot (id:string = null):Observable<Robot> {
    return this.store.select(state => state.robots.getRobot(id));
  }
}
