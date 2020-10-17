import * as React from 'react';
import { ApplicationState } from './application-state.interface';
import rootReducer from './root.reducer';
import { initialState } from './initial-state';

// Interface to define the basic props for the provider component
interface StateProviderProps {
    children: any;
}


// Interface to define to state of the context object.
interface IStateContext {
    state: ApplicationState;
    dispatch: ({type}:{type:string}) => void;
}

// A basic empty context object.
export const GlobalStore = React.createContext({} as IStateContext);

// An wrapping function to handle thunks (dispatched actions which are wrapped in a function, needed for async callbacks)
const asyncer = (dispatch: any, state: ApplicationState) => (action: any) =>
    typeof action === 'function' ? action(dispatch, state) : dispatch(action);

// The StateProvider component to provide the global state to all child components
export function StateProvider(props: StateProviderProps) {
    const [state, dispatchBase] = React.useReducer(rootReducer, initialState);

    const dispatch = React.useCallback(asyncer(dispatchBase, state), [])

    return (
        <GlobalStore.Provider value={{ state, dispatch }}>
            { props.children }
        </GlobalStore.Provider>
    )
}