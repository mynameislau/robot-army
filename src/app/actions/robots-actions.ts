import { Action } from '@ngrx/store';

export const CHANGE_NAME:string = 'CHANGE_NAME';
export const SET_SELECTED:string = 'SET_SELECTED';
export const DELETE:string = 'DELETE';
export const CREATE:string = 'CREATE';

export const changeNameAction = (name:string, id:string) => ({
  type: CHANGE_NAME,
  payload: {
    name: name,
    id: id
  }
});

export const setSelectedAction = (id:string) => ({
  type: SET_SELECTED,
  payload: {
    id: id
  }
});

export const deleteAction = (id:string) => ({
  type: DELETE,
  payload: {
    id: id
  }
});

export const createAction = () => ({
  type: CREATE,
  payload: {
    name: name
  }
});
