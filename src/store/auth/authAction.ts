import { loginUser, registerUser, logoutUser } from '../../api/auth';
import {
  authActionNames,
  snackbarActionNames,
} from '../../common/constants/actionNames';
import { IRegisterFormValues } from '../../common/interfaces/forms';

export function initSession(dispatch: any, payload: any) {
  const { email, password } = payload;

  return new Promise((resolve, reject) => {
    loginUser({ email, password })
      .then((user) => {
        dispatch({
          type: authActionNames.INIT_SESSION,
          payload: {
            user,
            isAuthenticated: true,
          },
        });
        resolve({ status: true });
      })
      .catch((error) => {
        dispatch({
          type: snackbarActionNames.OPEN_SNACKBAR,
          payload: {
            message: error.message,
          },
        });
      });
  });
}

export function createUser(dispatch: any, user: IRegisterFormValues) {
  return new Promise((resolve, reject) => {
    registerUser(user)
      .then((doc) => {
        dispatch({
          type: authActionNames.INIT_SESSION,
          payload: {
            user,
            isAuthenticated: true,
          },
        });
        resolve();
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: snackbarActionNames.OPEN_SNACKBAR,
          payload: {
            message: error.message,
          },
        });
      });
  });
}

export function logout(dispatch: any) {
  return new Promise((resolve, reject) => {
    logoutUser()
      .then(() => {
        dispatch({
          type: authActionNames.LOGOUT,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: snackbarActionNames.OPEN_SNACKBAR,
          payload: {
            message: error.message,
          },
        });
      });
  });
}
