import { sessionActionNames } from '../common/constants/actionNames';
import { IAuthState } from '../common/interfaces/states';
import { IAuthAction } from '../common/interfaces/actions';

export const authInitialState: IAuthState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    photoURL: '',
    id: '',
    phone: '',
  },
  isAuthenticated: false,
};

export function authReducer(state: IAuthState = authInitialState, action: IAuthAction): IAuthState {
  let res: IAuthState;

  switch (action.type) {
    case sessionActionNames.INIT_SESSION:
      res = {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
      break;
    case sessionActionNames.CHANGE_SESSION:
      res = {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
      break;
    case sessionActionNames.LOGOUT:
      res = {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
      break;
    default:
      res = state;
  }
  return res;
};
