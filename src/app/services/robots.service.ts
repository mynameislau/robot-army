import { Injectable } from '@angular/core';

import { IRobot } from '../model/IRobot';

@Injectable()
export class RobotsService {
  getRobots ():IRobot[] {
    return [
      { name: 'Bender' },
      { name: 'Roberto' },
      { name: 'Hal' }
    ];
  }
}
