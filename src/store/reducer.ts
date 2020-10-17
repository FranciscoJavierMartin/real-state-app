import { authReducer } from './authReducer';
import { snackbarReducer } from './snackbarReducer';

export function mainReducer({ auth, openSnackbar }: any, action: any) {
  return {
    auth: authReducer(auth, action),
    openSnackbar: snackbarReducer(openSnackbar, action),
  };
}
