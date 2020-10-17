import React from 'react';
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
} from './common/routes';
import Page404 from './pages/Page404';
import RegisterUserPage from './pages/RegisterUserPage';
import LoginUserPage from './pages/LoginUserPage';
import { useStateValue } from './store/context';
import { snackbarReducer } from './store/snackbarReducer';
import { snackbarActionNames } from './common/constants/actionNames';

const App: React.FC = () => {
  const [{ openSnackbar }, dispatch] = useStateValue();
  console.log(openSnackbar);

  return (
    <MuiThemeProvider theme={theme}>
      <Navbar />
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
            type: snackbarActionNames.OPEN_SNACKBAR,
            payload: {
              open: false,
              message: '',
            },
          });
        }}
        open={openSnackbar ? openSnackbar.isVisible : false}
        message={
          <span id='message-id' style={{color: 'red'}}>{openSnackbar ? openSnackbar.message : ''}</span>
        }
      />
      <Grid container>
        <Switch>
          <Route exact path={HOME_LIST_ROUTE} component={HomeListPage} />
          <Route
            exact
            path={REGISTER_USER_ROUTE}
            component={RegisterUserPage}
          />
          <Route exact path={LOGIN_USER_ROUTE} component={LoginUserPage} />
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </Grid>
    </MuiThemeProvider>
  );
};

export default App;
