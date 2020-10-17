import React, { createContext, useContext, useReducer } from 'react';
import { IRootState } from '../common/interfaces/context';
import { initialState } from './authReducer';

export const Context = createContext<any>(initialState);

export const Provider: React.FC<any> = ({
  reducer,
  initialState,
  children,
}) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

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
