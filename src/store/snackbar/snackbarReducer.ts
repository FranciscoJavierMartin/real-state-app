import { snackbarActionNames } from '../../common/constants/actionNames';
import { ISnackbarAction } from '../../common/interfaces/actions';
import { ISnackbarState } from '../../common/interfaces/states';

export function snackbarReducer(
  state: ISnackbarState,
  action: ISnackbarAction
): ISnackbarState {
  let res: ISnackbarState;

  switch (action.type) {
    case snackbarActionNames.OPEN_SNACKBAR:
      res = {
        ...state,
        isVisible: true,
        message: action.payload.message,
      };
      break;
    case snackbarActionNames.CLOSE_SNACKBAR:
      res = {
        ...state,
        isVisible: false,
        message: '',
      };
      break;
    default:
      res = state;
  }

  return res;
}
