import { Component, Input } from '@angular/core';
import { Robot } from '../model/state-model';

@Component ({
  selector: 'robot-card',
  template: `
    <article class="robot-card" [ngClass]="{ 'robot-card--selected': robot.selected }">
      <h1>{{robot.name}}</h1>
      <figure>
        <img src="https://robohash.org/{{robot.name}}.png">
      </figure>
    </article>
    `
})
export class RobotCardComponent {
  @Input()
  robot:Robot;
};