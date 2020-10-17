import { snackbarActionNames } from '../common/constants/actionNames';

export function openSnackabr(dispatch: any, payload: any): any {
  console.log(payload);
  dispatch({
    type: snackbarActionNames.OPEN_SNACKBAR,
    payload,
  })
}