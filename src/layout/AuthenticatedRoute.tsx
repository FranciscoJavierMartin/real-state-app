import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_USER_ROUTE } from '../common/routes';
import { useStateValue } from '../store/StateProvider';

const AuthenticatedRoute: React.FC<any> = ({
  component: Component,
  ...rest
}: any) => {
  const { state } = useStateValue();
  const { isAuthenticated } = state.auth;
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={LOGIN_USER_ROUTE} />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
