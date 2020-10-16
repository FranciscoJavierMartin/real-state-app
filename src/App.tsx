import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import HomeListPage from './pages/HomeListPage';
import theme from './theme/Theme';
import Navbar from './layout/Navbar';
import { Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { HOME_LIST_ROUTE, LOGIN_USER_ROUTE, REGISTER_USER_ROUTE } from './common/routes';
import Page404 from './pages/Page404';
import RegisterUserPage from './pages/RegisterUserPage';
import LoginUserPage from './pages/LoginUserPage';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Switch>
          <Route exact path={HOME_LIST_ROUTE} component={HomeListPage} />
          <Route
            exact
            path={REGISTER_USER_ROUTE}
            component={RegisterUserPage}
          />
          <Route
            exact
            path={LOGIN_USER_ROUTE}
            component={LoginUserPage}
          />
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </Grid>
    </MuiThemeProvider>
  );
};

export default App;
