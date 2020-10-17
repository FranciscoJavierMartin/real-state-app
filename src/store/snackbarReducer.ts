import { snackbarActionNames } from '../common/constants/actionNames';

export const snackbarInitialState = {
  isVisible: false,
  message: '',
};

export function snackbarReducer(state = snackbarInitialState, action: any) {
  let res;

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
