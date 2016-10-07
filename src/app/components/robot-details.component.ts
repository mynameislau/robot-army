import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Robot } from '../model/state-model';

@Component({
  selector: 'robot-details',
  template: `
    <section class="robot-details">
      <div [ngSwitch]="edit">
        <input #nameInput *ngSwitchCase="true" [ngModel]="robot.name" (ngModelChange)="changeNameHandler($event)" type="text" />
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
  robot:Robot;

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
