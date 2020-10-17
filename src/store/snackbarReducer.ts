import { snackbarActionNames } from '../common/constants/actionNames';
import { ISnackbarAction } from '../common/interfaces/actions';
import { ISnackbarState } from '../common/interfaces/states';

export const snackbarInitialState: ISnackbarState = {
  isVisible: false,
  message: '',
};

export function snackbarReducer(
  state: ISnackbarState = snackbarInitialState,
  action: ISnackbarAction
): ISnackbarState {
  let res: ISnackbarState;

  console.log(state, action);

  switch (action.type) {
    case snackbarActionNames.OPEN_SNACKBAR:
      res = {
        ...state,
        isVisible: action.payload.open,
        message: action.payload.message,
      };
      break;
    default:
      res = state;
  }

  console.log(res);

  return res;
}
