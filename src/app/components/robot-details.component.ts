import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Robot } from '../model/state-model';

@Component({
  selector: 'robot-details',
  template: `
    <section class="robot-details">
      <div [ngSwitch]="edit">
        <input
        *ngSwitchCase="true"
        (ngModelChange)="changeNameHandler($event)"
        [ngModel]="{{robot.name}}"
        type="text"
        />
        <h1 *ngSwitchDefault (click)="setEdit()">{{robot.name}}</h1>
      </div>
      <figure>
        <img src="https://robohash.org/{{robot.name}}.png">
      </figure>
    </section>
    <button (click)="deleteHandler()">Détruire</button>
    `
})
export class RobotDetailsComponent {
  @Input()
  robot:Robot;

  @Output()
  changeName = new EventEmitter(false);

  @Output()
  delete = new EventEmitter(false);

  edit:Boolean = false;

  deleteHandler () {
    this.delete.emit({
      id: this.robot.id
    });
  }

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
