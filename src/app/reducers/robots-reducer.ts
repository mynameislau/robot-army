import { ActionReducer, Action } from '@ngrx/store';
import { Robots, Robot } from '../model/state-model';
import { List, Map } from 'immutable';
import {
  CHANGE_NAME,
  SET_SELECTED,
  DELETE,
  CREATE,
  SERVER_UPDATE
} from '../actions/robots-actions';

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

    case DELETE:
      return state.deleteRobot(action.payload.id);

    case CREATE:
      return state.addRobot(action.payload.name);

    case SET_SELECTED:
      return state.setSelectedRobot(action.payload.id);

    case CHANGE_NAME:
      return state.changeRobotName(action.payload.name, action.payload.id);

    case SERVER_UPDATE:
      return state.updateRobots(action.payload);

    default:
      return state;
  }
};
