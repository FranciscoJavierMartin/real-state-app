import { loginUser, registerUser, logoutUser } from '../api/auth';
import { sessionActionNames } from '../common/constants/actionNames';
import { IRegisterFormValues } from '../common/interfaces/forms';
import { auth } from '../api/firebase';

export function initSession(dispatch: any, payload: any) {
  const { email, password } = payload;

  return new Promise((resolve, reject) => {
    loginUser({ email, password })
      .then((user) => {
        dispatch({
          type: sessionActionNames.INIT_SESSION,
          payload: {
            user,
            isAuthenticated: true,
          },
        });
        resolve({ status: true });
      })
      .catch((error) => {
        console.log(error);
        resolve({ status: false, message: 'Error on init session' });
      });
  });
}

export function createUser(dispatch: any, user: IRegisterFormValues) {
  return new Promise((resolve, reject) => {
    registerUser(user)
      .then((doc) => {
        dispatch({
          type: sessionActionNames.INIT_SESSION,
          payload: {
            user,
            isAuthenticated: true,
          },
        });
        resolve();
      })
      .catch(console.log);
  });
}

export function logout(dispatch: any) {
  return new Promise((resolve, reject) => {
    logoutUser().then(() => {
      dispatch({
        type: sessionActionNames.LOGOUT,
        payload: {
          isAuthenticated: false,
        },
      });
      resolve();
    });
  });
}
