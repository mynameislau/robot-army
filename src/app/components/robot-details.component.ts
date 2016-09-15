import { Component, Input } from '@angular/core';
import { IRobot } from '../model/IRobot';

@Component({
  selector: 'robot-details',
  template: `
    <section class="robot-details">
      <h1>{{robot.name}}</h1>
      <figure>
        <img src="https://robohash.org/{{robot.name}}.png">
      </figure>
    </section>
    `
})
export class RobotDetailsComponent {
  @Input()
  robot:IRobot
};