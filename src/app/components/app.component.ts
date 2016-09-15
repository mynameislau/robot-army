import { Component } from '@angular/core';

interface IRobot {
  name:string;
}

@Component({
  selector: 'my-app',
  template: `
  <article>
    <h1>{{robot.name}}</h1>
    <figure>
      <img src="https://robohash.org/{{robot.name}}.png">
    </figure>
  </article>
  <input [(ngModel)]="robot.name" placeholder="name"/>
  `
})
export class AppComponent {
  robot:IRobot = {
    name: 'Bender'
  }
};