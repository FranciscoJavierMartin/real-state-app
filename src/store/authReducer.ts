import { sessionActionNames } from '../common/constants/actionNames';
import { IActionType, IRootState } from '../common/interfaces/context';

export const initialState: IRootState = {
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

export function authReducer(state: IRootState = initialState, action: IActionType): IRootState {
  let res: IRootState;

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
