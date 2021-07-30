import {
  IAuthState,
  IRootState,
  ISnackbarState,
} from '../common/interfaces/states';

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

export const snackbarInitialState: ISnackbarState = {
  isVisible: false,
  message: '',
};

export const initialState: IRootState = {
  auth: authInitialState,
  snackbar: snackbarInitialState,
};
