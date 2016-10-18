import { Action } from '@ngrx/store';

export const CHANGE_NAME:string = 'CHANGE_NAME';

export const changeNameAction = (name:string, id:string) => ({
  type: CHANGE_NAME,
  payload: {
    name: name,
    id: id
  }
});
