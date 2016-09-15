export interface IRobot {
  name:string;
}

export interface IRobots {
  list:IRobot[]
}

export interface IAppState {
  robots: IRobots;
}
