import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { IRobot } from '../model/IRobot';

const baseURL:string = 'http://localhost:9999';
const JSONHeaders:Headers = new Headers({ 'Content-Type': 'application/json' });
const opts:RequestOptionsArgs = { headers: JSONHeaders };

@Injectable()
export class RobotsService {

  constructor (private http:Http) {
  }

  createRobot ():Promise<IRobot> {
    return this.http.post(`${baseURL}/robot-list`,
      JSON.stringify({ name: 'noname' }),
      opts
    )
    .toPromise()
    .then(response => response.json());
  }

  getRobots ():Promise<IRobot[]> {
    return this.http.get(`${baseURL}/robot-list`)
    .toPromise()
    .then(response => response.json());
  }

  updateRobot (id:string, name:string) {
    return this.http.put(`${baseURL}/robot-list/${id}`,
      JSON.stringify({ name: name }),
      opts
    )
    .toPromise()
    .then(response => console.log(response.json()))
    .catch(error => console.log(error));
  }

  deleteRobot (id:string):Promise<string> {
    return this.http.delete(`${baseURL}/robot-list/${id}`)
    .toPromise()
    .then(response => response.text());
  }
}
