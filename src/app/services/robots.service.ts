import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeNameAction } from '../actions/robots-actions';

import { IRobot, IAppState } from '../model/state-interfaces';

@Injectable()
export class RobotsService {

  constructor (private store:Store<IAppState>) {}

  getRobotsList ():Observable<IRobot[]>{
    return this.store.select(state => state.robots.list);
  }

  changeRobotName (name:string, id:string) {
    this.store.dispatch(changeNameAction(name, id));
  }
}
