import React, { createContext, useContext, useReducer } from 'react';
import { IRootState } from '../common/interfaces/states';
import { authInitialState } from './authReducer';
import { mainReducer } from './reducer';
import { snackbarInitialState } from './snackbarReducer';

const initialState: IRootState = {
  auth: authInitialState,
  snackbar: snackbarInitialState,
};

// <{
//   state: IRootState;
//   dispatch: React.Dispatch<any>;
// }>
// export const Context = createContext({ state: initialState, dispatch: () => null });

interface IStateContext {
  state: IRootState;
  dispatch: ({ type }: { type: string }) => void;
}

export const Context = createContext({} as IStateContext);

const asyncer = (dispatch: any, state: IRootState) => (action: any) =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action);

export const Provider: React.FC<any> = ({children}) => {
  const [_state, dispatchBase] = useReducer(mainReducer, initialState);
  const state = _state as IRootState;
  const dispatch = React.useCallback(asyncer(dispatchBase, state), []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);

// export const Consumer = (Component: any) => (props: any) => (
//   <Context.Consumer>
//     {
//       ({}) => <Component {...props}/>
//     }
//   </Context.Consumer>
// )

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// export function withContext<
//   P extends { appContext?: IRootContext },
//   R = Omit<P, 'appContext'>
//   >(
//   Component: React.ComponentClass<P> | React.FunctionComponent<P>
//   ): React.FunctionComponent<R> {
//   return function BoundComponent(props: R) {
//     return (
//       <Context.Consumer>
//         {value => <Component {...props} appContext={value} />}
//       </Context.Consumer>
//     );
//   };
// }
