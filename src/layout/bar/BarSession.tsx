import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  createStyles,
  Theme,
  Toolbar,
  Typography,
  withStyles,
  WithStyles,
  Button,
  IconButton,
  Drawer,
  Avatar,
} from '@material-ui/core';
import { LOGIN_USER_ROUTE } from '../../common/routes';
import { useStateValue } from '../../store/StateProvider';
import { logout } from '../../store/auth/authAction';
import RightMenu from '../drawerMenu/RightMenu';
import LeftMenu from '../drawerMenu/LeftMenu';

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
    list: {
      width: 250,
    },
    avatarSize: {
      width: 40,
      height: 40,
    },
    listItemText: {
      fontSize: '14px',
      fontWeight: 600,
      paddingLeft: '15px',
      color: '#212121',
    },
  });

interface IBarSessionProps extends WithStyles<typeof styles> {}

const BarSession: React.FC<IBarSessionProps> = ({ classes }) => {
  const [right, setRight] = useState<boolean>(false);
  const [left, setLeft] = useState<boolean>(false);
  const { state, dispatch } = useStateValue();
  const { user, isAuthenticated } = state.auth;
  const history = useHistory();

  const goToLogin = (): void => {
    history.push(LOGIN_USER_ROUTE);
  };

  const goToLogout = (): void => {
    logout(dispatch);
  };

  const toggleDrawer = (side: 'left' | 'right') => {
    switch (side) {
      case 'left':
        setLeft((previousState) => !previousState);
        break;
      case 'right':
        setRight((previousState) => !previousState);
        break;
    }
  };

  return (
    <>
      <Drawer open={left} onClose={() => toggleDrawer('left')} anchor='left'>
        <div
          role='button'
          onClick={() => toggleDrawer('left')}
          onKeyDown={() => toggleDrawer('left')}
        >
          <LeftMenu classes={classes} />
        </div>
      </Drawer>
      <Drawer open={right} onClose={() => toggleDrawer('right')} anchor='right'>
        <div
          role='button'
          onClick={() => toggleDrawer('right')}
          onKeyDown={() => toggleDrawer('right')}
        >
          <RightMenu classes={classes} />
        </div>
      </Drawer>
      <Toolbar>
        <IconButton color='inherit' onClick={() => toggleDrawer('left')}>
          <i className='material-icons'>menu</i>
        </IconButton>
        <Typography variant='h6'>Holiday Homes</Typography>
        <div className={classes.grow}></div>
        <div className={classes.sectionDesktop}>
          <IconButton color='inherit' component={Link} to={LOGIN_USER_ROUTE}>
            <i className='material-icons'>mail_outline</i>
          </IconButton>
          <Button color='inherit' onClick={goToLogout}>
            Logout
          </Button>
          <Button color='inherit' onClick={goToLogin}>
            Login
          </Button>
          <Avatar src={user.photoURL}></Avatar>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton color='inherit' onClick={() => toggleDrawer('right')}>
            <i className='material-icons'>more_vert</i>
          </IconButton>
        </div>
      </Toolbar>
    </>
  );
};

export default withStyles(styles)(BarSession);
