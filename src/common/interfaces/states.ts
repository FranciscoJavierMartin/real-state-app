export interface IRootState {
  auth: IAuthState;
  snackbar: ISnackbarState;
}

export interface IAuthState {
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

export interface ISnackbarState {
  isVisible: boolean;
  message: string;
}

