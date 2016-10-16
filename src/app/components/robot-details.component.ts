import { Component, Input, Output, EventEmitter } from '@angular/core';
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
      <button (click)="saveClick.emit(robot)">Enregistrer</button>
      <button (click)="deleteClick.emit(robot)">Détruire</button>
    </section>
    `
})
export class RobotDetailsComponent {
  @Input()
  robot:IRobot;

  @Output()
  saveClick = new EventEmitter();

  @Output()
  deleteClick = new EventEmitter();

  edit:Boolean = false;

  setEdit () {
    this.edit = !this.edit;
  };
};
