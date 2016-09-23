import { Component } from '@angular/core';
import { RobotsService } from '../services/robots.service';

@Component({
  selector: 'my-app',
  template: `
    <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor (private service:RobotsService) {

  }

  ngOnInit () {
    this.service.initialize();
  }
}
