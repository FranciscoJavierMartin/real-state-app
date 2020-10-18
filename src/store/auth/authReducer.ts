import { authActionNames } from '../../common/constants/actionNames';
import { IAuthState } from '../../common/interfaces/states';
import { IAuthAction } from '../../common/interfaces/actions';

export function authReducer(
  state: IAuthState,
  action: IAuthAction
): IAuthState {
  let res: IAuthState;

  switch (action.type) {
    case authActionNames.INIT_SESSION:
      res = {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
      };
      break;
    case authActionNames.CHANGE_SESSION:
      res = {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
      break;
    case authActionNames.LOGOUT:
      res = {
        ...state,
        user: {
          firstName: '',
          lastName: '',
          email: '',
          id: '',
          phone: '',
          photoURL: '',
        },
        isAuthenticated: false,
      };
      break;
    default:
      res = state;
  }
  return res;
}
