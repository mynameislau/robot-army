import { ActionReducer, Action } from '@ngrx/store';
import { IRobots, IRobot } from '../model/state-interfaces';

const defaultRobots:IRobots = {
  list: [
    { name: 'R2D2' },
    { name: 'Bender' },
    { name: 'Terminator' }
  ]
}

export const robotsReducer:ActionReducer<IRobots> = (state:IRobots = defaultRobots, action:Action):IRobots => {
  switch (action.type) {
    default:
      return state;
  }
};