import { List, Record } from 'immutable';

export const RobotRecord = Record({
  name: null,
  id: null
});

export const RobotsRecord = Record({
  list: List()
});

export const AppStateRecord = Record({
  robots: null
});

export class Robot extends RobotRecord {
  name:string;
  id:string;
}

export class Robots extends RobotsRecord {
  list: List<Robot>;

  changeRobotName (name:string, id:string):Robots {
    return this.update('list', list => {
      return list.map((robot:Robot) => {
        if (robot.id === id) {
          return robot.set('name', name);
        }
        else {
          return robot;
        }
      });
    }) as Robots;
  }

  getRobot (id:string):Robot {
    return this.list.reduce((prev, robot) => {
      return robot.get('id') === id ? robot : prev;
    }, null);
  }
}

export class AppState extends AppStateRecord {
  robots:Robots;
}
