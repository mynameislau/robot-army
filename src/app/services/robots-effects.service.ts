import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../model/state-model';

import { INIT } from '../actions/robots-actions';

@Injectable()
export class RobotsEffects {
  store:Store<AppState>

  constructor (store:Store<AppState>) {
    this.store = store;
  }

  @Effect() init$ = this.updates$
    .whenAction('INIT_NOTES')
    .switchMap(() => this.notesDataService.getNotes().mergeMap(notes => Observable.from(notes))
      .map(res => ({ type: "ADD_NOTE_FROM_SERVER", payload: res }))
      .catch(() => Observable.of({ type: "FETCH_FAILED" }))
    )
}