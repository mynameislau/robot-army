export class Robot {

  constructor (private name:string) { }

  public say (message:string):string {
    return `
      Hello, je suis un robot nommé ${this.name},
      et je vous dit : ${message}
    `;
  }
}
