import { Component } from '@angular/core';
import { IRobot } from '../model/IRobot';
import { Observable } from 'rxjs';

import { RobotsService } from '../services/robots.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="panels">
      <div class="panels__main">
        <h1>Robot Army Manager 3000</h1>
        <ul class="card-list">
          <li *ngFor="let robot of robots" class="card-list__entry">
            <robot-card (click)="select(robot)" [robot]="robot" [selected]="isSelected(robot)"></robot-card>
          <li>
        </ul>
        <button (click)="createRobot()">Créer un robot</button>
      </div>
      <div class="panels__side">
        <robot-details
        *ngIf="selectedRobot"
        (saveClick)="updateRobot($event.id, $event.name)"
        (deleteClick)="deleteRobot($event.id)"
        [robot]="selectedRobot"></robot-details>
      </div>
    </div>
  `
})
export class AppComponent {
  robots:IRobot[] = [];
  selectedRobot:IRobot;

  constructor (private service:RobotsService) {
  }

  isSelected (robot:IRobot) {
    return robot === this.selectedRobot;
  }

  createRobot () {
    this.service.createRobot()
    .then(robot => this.robots.push(robot));
  }

  updateRobot (id:string, name:string) {
    this.service.updateRobot(id, name);
  }

  deleteRobot (id:string) {
    this.service.deleteRobot(id)
    .then(() => {
      this.robots = this.robots.filter(robot => robot.id !== id)
      this.selectedRobot = null;
    })
  }

  select (robot:IRobot) {
    this.selectedRobot = robot;
  };

  ngOnInit () {
    this.service.getRobots()
    .then(robots => this.robots = robots);
  }
};
