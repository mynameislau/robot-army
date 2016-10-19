import { Component } from '@angular/core';
import { RobotsService } from '../services/robots.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Robot } from '../model/state-model';

@Component({
  selector: 'robot-page',
  template: `
    <main class="container robot-page">
      <p>
        <button (click)="goBack()">Retour</button>
      </p>
      <h1>{{(robot$|async)?.name}}</h1>
      <figure>
        <img src="https://robohash.org/{{(robot$|async)?.name}}.png">
      </figure>
      <section>
        <h1>Informations</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </main>
  `
})
export class RobotPageComponent {
  robot$:Observable<Robot>

  constructor (private robotsService:RobotsService, private route:ActivatedRoute) {}

  goBack () {
    window.history.back();
  }

  ngOnInit () {
    this.route.params.forEach((params: Params) => {
      this.robot$ = this.robotsService.getRobot(params['id']);
   });
  }
};
