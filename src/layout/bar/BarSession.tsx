import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  createStyles,
  Theme,
  Toolbar,
  Typography,
  withStyles,
  WithStyles,
  Button,
  IconButton,
} from '@material-ui/core';
import { LOGIN_USER_ROUTE } from '../../common/routes';
import { useStateValue } from '../../store/StateProvider';
import { logout } from '../../store/auth/authAction';

const styles = (theme: Theme) =>
  createStyles({
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    grow: {
      flexGrow: 1,
    },
  });

interface IBarSessionProps extends WithStyles<typeof styles> {}

const BarSession: React.FC<IBarSessionProps> = ({ classes }) => {
  const { dispatch } = useStateValue();
  const history = useHistory();

  const goToLogin = (): void => {
    history.push(LOGIN_USER_ROUTE);
  };

  const goToLogout = (): void => {
    logout(dispatch);
  };

  return (
    <Toolbar>
      <IconButton color='inherit'>
        <i className='material-icons'>menu</i>
      </IconButton>
      <Typography variant='h6'>Holiday Homes</Typography>
      <div className={classes.grow}></div>
      <div className={classes.sectionDesktop}>
        <Button color='inherit' onClick={goToLogin}>
          Login
        </Button>
        <Button color='inherit' onClick={goToLogout}>
          Logout
        </Button>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton color='inherit'>
          <i className='material-icons'>more_vert</i>
        </IconButton>
      </div>
    </Toolbar>
  );
};

export default withStyles(styles)(BarSession);
