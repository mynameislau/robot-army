import { Component, Input } from '@angular/core';
import { IRobot } from '../model/state-interfaces';

@Component ({
  selector: 'robot-card',
  template: `
    <article class="robot-card" [ngClass]="{ 'robot-card--selected': selected }">
      <h1>{{robot.name}}</h1>
      <figure>
        <img src="https://robohash.org/{{robot.name}}.png">
      </figure>{{selected}}
    </article>
    `
})
export class RobotCardComponent {
  @Input()
  robot:IRobot;

  @Input()
  selected:Boolean;
};
