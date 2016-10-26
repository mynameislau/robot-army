import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../model/state-model';
import { Actions, Effect } from '@ngrx/effects';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import {
  INIT,
  CREATE,
  DELETE,
  CHANGE_NAME,
  SET_SELECTED,
  serverUpdateFailed,
  serverUpdate,

} from '../actions/robots-actions';

const root:string = 'http://localhost:9999';
const JSONHeaders = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class RobotsEffects {

  constructor (private store:Store<AppState>, private http:Http, private actions$:Actions) {
  }

  @Effect()
  init$ = this.actions$
    .ofType(INIT)
    .switchMap(() => this.http.get(`${root}/`)
    	.map((response:Response) => serverUpdate(response.json()))
      .catch((reason) => Observable.of(serverUpdateFailed(reason)))
    );

  @Effect()
  create$ = this.actions$
    .ofType(CREATE, DELETE, CHANGE_NAME, SET_SELECTED)
    .withLatestFrom(
      this.store.select(state => state.robots.list.toArray()),
      (action, robots) => {
        return {
          action: action,
          robots: robots
        };
      }
    )
    .switchMap(data => this.http.post(`${root}/`, JSON.stringify(data), JSONHeaders)
      .map((response:Response) => serverUpdate(response.json()))
      .catch((reason) => Observable.of(serverUpdateFailed(reason)))
    );
}
