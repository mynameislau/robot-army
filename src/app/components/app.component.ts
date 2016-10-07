import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <article>
    <h1>{{robotName}}</h1>
    <figure>
      <img src="https://robohash.org/{{robotName}}.png">
    </figure>
  </article>
  <input [(ngModel)]="robotName" placeholder="name"/>
  `
})
export class AppComponent {
  robotName:string = 'Bender';
};
