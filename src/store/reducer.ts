import { ISnackbarAction, IAuthAction } from '../common/interfaces/actions';
import { IRootState } from '../common/interfaces/states';
import { authReducer } from './authReducer';
import { snackbarReducer } from './snackbarReducer';

export function mainReducer({ auth, snackbar }: IRootState, action: IAuthAction | ISnackbarAction) {
  return {
    auth: authReducer(auth, action as IAuthAction),
    openSnackbar: snackbarReducer(snackbar, action as ISnackbarAction),
  };
}
