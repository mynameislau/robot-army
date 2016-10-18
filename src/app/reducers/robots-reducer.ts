import { ActionReducer, Action } from '@ngrx/store';
import { IRobots, IRobot } from '../model/state-interfaces';
import { CHANGE_NAME } from '../actions/robot-actions';

const defaultRobots:IRobots = {
  list: [
    { name: 'R2D2', id: '0' },
    { name: 'Bender', id: '1' },
    { name: 'Terminator', id: '2' }
  ]
}

export const robotsReducer:ActionReducer<IRobots> = (state:IRobots = defaultRobots, action:Action):IRobots => {
  switch (action.type) {

    case CHANGE_NAME:
      return Object.assign(state, {
        list: state.list.map(robot => {
          if (robot.id === action.payload.id) {
            return Object.assign(robot, { name: action.payload.name });
          }
          else {
            return robot;
          }
        })
      });

    default:
      return state;
  }
};
