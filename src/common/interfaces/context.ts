import { sessionActionNames } from '../constants/actionNames';

export interface IRootState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    photoURL: string;
    id: string;
    phone: string;
  };
  isAuthenticated: boolean;
}

export interface IActionType {
  type: sessionActionNames,
  payload: any;
}