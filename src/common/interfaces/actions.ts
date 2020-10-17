import { sessionActionNames, snackbarActionNames } from '../constants/actionNames';

export interface IAuthAction {
  type: sessionActionNames,
  payload: any;
}

export interface ISnackbarAction {
  type: snackbarActionNames,
  payload: any;
}