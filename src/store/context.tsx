import React from 'react';
import { IRootContext } from '../common/interfaces/context';

export const Context = React.createContext<IRootContext>({});

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
