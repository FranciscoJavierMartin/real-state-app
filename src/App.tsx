import React, { useEffect } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import HomeListPage from './pages/HomeListPage';
import theme from './theme/Theme';
import Navbar from './layout/Navbar';
import { Grid, Snackbar } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import {
  HOME_LIST_ROUTE,
  LOGIN_USER_ROUTE,
  REGISTER_USER_ROUTE,
  USER_PROFILE_ROUTE,
} from './common/routes';
import Page404 from './pages/Page404';
import RegisterUserPage from './pages/RegisterUserPage';
import LoginUserPage from './pages/LoginUserPage';
import { useStateValue } from './store/StateProvider';
import {
  authActionNames,
  snackbarActionNames,
} from './common/constants/actionNames';
import { auth } from './api/firebase';
import { getUserProfile } from './api/auth';
import AuthenticatedRoute from './layout/AuthenticatedRoute';
import UserProfilePage from './pages/UserProfilePage';

const App: React.FC = () => {
  const { state, dispatch } = useStateValue();
  const { snackbar } = state;

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);
      if (userAuth?.uid) {
        const user = await getUserProfile(userAuth?.uid);
        dispatch({
          type: authActionNames.INIT_SESSION,
          payload: {
            user: {
              ...user.data(),
              id: user.id,
            },
          },
        });
      } else {
        dispatch({
          type: authActionNames.LOGOUT,
        });
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        autoHideDuration={6000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        onClose={() => {
          dispatch({
            type: snackbarActionNames.CLOSE_SNACKBAR,
          });
        }}
        open={snackbar ? snackbar.isVisible : false}
        message={
          <span id='message-id'>{snackbar ? snackbar.message : ''}</span>
        }
      />
      <Grid container>
        <Switch>
          <Route
            exact
            path={REGISTER_USER_ROUTE}
            component={RegisterUserPage}
          />
          <Route exact path={LOGIN_USER_ROUTE} component={LoginUserPage} />
          <>
            <Navbar />
            <Route
              exact
              path={USER_PROFILE_ROUTE}
              component={UserProfilePage}/>
            <Route
              exact
              path={HOME_LIST_ROUTE}
              component={HomeListPage}
            />
          </>
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </Grid>
    </MuiThemeProvider>
  );
};

export default App;
