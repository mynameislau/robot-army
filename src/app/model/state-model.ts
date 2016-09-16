import { List, Record } from 'immutable';

export const RobotRecord = Record({
  name: null,
  id: null,
  selected: false
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
  selected:Boolean;
}

export class Robots extends RobotsRecord {
  list: List<Robot>;

  changeRobotName (name:string, id:string) {
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
  };

  addRobot (name:string) {
    return this.update('list', list => {
      var highestID = this.list.reduce((prev, robot) => Number(robot.id) > prev ? Number(robot.id) : prev, 0);
      return list.push(new Robot({ name: name ? name : 'noname', id: String(highestID + 1) }));
    }) as Robots;
  };

  deleteRobot (id:string) {
    return this.update('list', list =>
      list.filter((robot:Robot) =>
        robot.id !== id
      )
    ) as Robots;
  }

  getSelectedRobot () {
    return this.list.reduce((prev, robot) => robot.selected ? robot : prev, null);
  }

  setSelectedRobot (id:string) {
    return this.update('list', list =>
      list.map((robot:Robot) =>
        robot.set('selected', id === robot.id)
      )
    ) as Robots;
  }
}

export class AppState extends AppStateRecord {
  robots:Robots;
}
