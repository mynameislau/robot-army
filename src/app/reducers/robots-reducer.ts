import { ActionReducer, Action } from '@ngrx/store';
import { Robots, Robot } from '../model/state-model';
import { List, Map } from 'immutable';
import { CHANGE_NAME } from '../actions/robots-actions';

const robotsList:List<Robot> = List([
  new Robot({ name: 'R2D2', id: '0' }),
  new Robot({ name: 'Bender', id: '1' }),
  new Robot({ name: 'Terminator', id: '2' })
]);

const defaultRobots:Robots = new Robots({
  list: robotsList
});

export const robotsReducer:ActionReducer<Robots> = (state:Robots = defaultRobots, action:Action):Robots => {
  switch (action.type) {

    case CHANGE_NAME:
      return state.changeRobotName(action.payload.name, action.payload.id);

    default:
      return state;
  }
};