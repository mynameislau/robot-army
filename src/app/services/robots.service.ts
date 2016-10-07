import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IRobot, IAppState } from '../model/state-interfaces';

@Injectable()
export class RobotsService {

  constructor (private store:Store<IAppState>) {}

  getRobotsList ():Observable<IRobot[]>{
    return this.store.select(state => state.robots).map(robots => robots.list);
  }
}
