import * as React from 'react';
import { IRootState } from '../common/interfaces/states';
import rootReducer from './rootReducer';
import { initialState } from './initialState';
import { StateAction } from '../common/interfaces/actions';
import { useContext } from 'react';

// Interface to define the basic props for the provider component
interface IContextProviderProps {}

// Interface to define to state of the context object.
interface IStateContext {
  state: IRootState;
  dispatch: ({ type, payload }: StateAction) => void;
}

// A basic empty context object.
export const GlobalStore = React.createContext({} as IStateContext);

// An wrapping function to handle thunks (dispatched actions which are wrapped in a function, needed for async callbacks)
const asyncer = (dispatch: any, state: IRootState) => (action: any) =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action);

// The StateProvider component to provide the global state to all child components
export const StateProvider: React.FC<IContextProviderProps> = ({ children }) => {
  const [state, dispatchBase] = React.useReducer(rootReducer, initialState);

  const dispatch = React.useCallback(asyncer(dispatchBase, state), []);

  return (
    <GlobalStore.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStore.Provider>
  );
};

export const useStateValue = () => useContext(GlobalStore);