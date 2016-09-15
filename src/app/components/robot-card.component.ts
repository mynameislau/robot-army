import { Component, Input } from '@angular/core';
import { IRobot } from '../model/IRobot';

@Component ({
  selector: 'robot-card',
  template: `
    <article>
      <h1>{{robot.name}}</h1>
      <figure>
        <img src="https://robohash.org/{{robot.name}}.png">
      </figure>
    </article>
    `
})
export class RobotCardComponent {
  @Input()
  robot:IRobot;
};