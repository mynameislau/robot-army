import { Component, Input } from '@angular/core';
import { IRobot } from '../model/IRobot';

@Component({
  selector: 'robot-details',
  template: `
    <section class="robot-details">
      <div [ngSwitch]="edit">
        <input *ngSwitchCase="true" [(ngModel)]="robot.name" type="text" />
        <h1 *ngSwitchDefault (click)="setEdit()">{{robot.name}}</h1>
      </div>
      <figure>
        <img src="https://robohash.org/{{robot.name}}.png">
      </figure>
    </section>
    `
})
export class RobotDetailsComponent {
  @Input()
  robot:IRobot;

  edit:Boolean = false;

  setEdit () {
    this.edit = !this.edit;
  };
};