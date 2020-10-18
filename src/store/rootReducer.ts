import { IRootState } from '../common/interfaces/states';
import {
  IAuthAction,
  ISnackbarAction,
  StateAction,
} from '../common/interfaces/actions';
import { snackbarReducer } from './snackbar/snackbarReducer';
import { authReducer } from './auth/authReducer';

export default function rootReducer(
  state: IRootState,
  action: StateAction
): IRootState {
  const { snackbar, auth } = state;
  return {
    snackbar: snackbarReducer(snackbar, action as ISnackbarAction),
    auth: authReducer(auth, action as IAuthAction),
  };
}
