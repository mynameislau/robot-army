import { Action } from '@ngrx/store';

export const CHANGE_NAME:string = 'CHANGE_NAME';
export const SET_SELECTED:string = 'SET_SELECTED';
export const DELETE:string = 'DELETE';
export const CREATE:string = 'CREATE';
export const INIT:string = 'INIT';
export const SERVER_UPDATE:string = 'SERVER_UPDATE';
export const SERVER_UPDATE_FAILED:string = 'SERVER_UPDATE_FAILED';

export const changeNameAction = (name:string, id:string) => ({
  type: CHANGE_NAME,
  payload: {
    name: name,
    id: id
  }
});

export const initAction = () => ({
  type: INIT,
  payload: {}
});

export const serverUpdate = (initJSON:any) => ({
  type: SERVER_UPDATE,
  payload: initJSON
});

export const serverUpdateFailed = (reason:string) => ({
  type: SERVER_UPDATE_FAILED,
  payload: {
    reason: reason
  }
})

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

export const createAction = (id:string) => ({
  type: CREATE,
  payload: {
    name: name
  }
});
