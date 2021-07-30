import { authActionNames, snackbarActionNames } from '../constants/actionNames';

export interface IAuthAction {
  type: authActionNames,
  payload?: any;
}

export interface ISnackbarAction {
  type: snackbarActionNames,
  payload?: any;
}
export type StateAction = IAuthAction | ISnackbarAction