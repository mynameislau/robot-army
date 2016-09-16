import { Component, Input } from '@angular/core';
import { Robot } from '../model/state-model';

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
  robot:Robot;

  @Input()
  selected:Boolean;
};