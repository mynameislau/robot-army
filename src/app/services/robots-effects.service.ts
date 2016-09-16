import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../model/state-model';
import { Actions, Effect } from '@ngrx/effects';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { INIT, INIT_FAILED } from '../actions/robots-actions';
import { RobotsDataService } from '../services/robots-data.service';

@Injectable()
export class RobotsEffects {

  constructor (private store:Store<AppState>, private http:Http, private actions$:Actions) {
  }

  @Effect() login$ = this.actions$
      // Listen for the 'LOGIN' action
      .ofType(INIT)
      .switchMap(() => this.http.get('/')
        // If successful, dispatch success action with result
        .map(res => ({ type: 'LOGIN_SUCCESS', payload: res.json() }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: 'LOGIN_FAILED' }));
      );
}