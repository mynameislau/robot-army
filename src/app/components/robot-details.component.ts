import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IRobot } from '../model/state-interfaces';

@Component({
  selector: 'robot-details',
  template: `
    <section class="robot-details">
      <div [ngSwitch]="edit">
        <input *ngSwitchCase="true" [ngModel]="robot.name" (ngModelChange)="changeNameHandler($event)" type="text" />
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

  @Output()
  changeName = new EventEmitter(false);

  edit:Boolean = false;

  changeNameHandler (name:string) {
    this.changeName.emit({
      name: name,
      id: this.robot.id
    });
  }

  setEdit () {
    this.edit = !this.edit;
  };
};
