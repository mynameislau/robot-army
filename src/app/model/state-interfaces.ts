export interface IRobot {
  name:string;
  id:string;
}

export interface IRobots {
  list:IRobot[]
}

export interface IAppState {
  robots: IRobots;
}
