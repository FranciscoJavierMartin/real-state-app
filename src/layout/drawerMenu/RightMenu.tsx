import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import { LOGIN_USER_ROUTE, REGISTER_USER_ROUTE } from '../../common/routes';
import { useStateValue } from '../../store/StateProvider';
import { logout } from '../../store/auth/authAction';
import { snackbarActionNames } from '../../common/constants/actionNames';

interface IRightMenuProps {
  classes: Record<
    | 'sectionDesktop'
    | 'sectionMobile'
    | 'grow'
    | 'list'
    | 'avatarSize'
    | 'listItemText',
    string
  >;
}

const RightMenu: React.FC<IRightMenuProps> = ({ classes }) => {
  const history = useHistory();
  const { state, dispatch } = useStateValue();
  const { user, isAuthenticated } = state.auth;

  const doLogout = () => {
    try {
      logout(dispatch);
      history.push(LOGIN_USER_ROUTE);
    } catch (error) {
      dispatch({
        type: snackbarActionNames.OPEN_SNACKBAR,
        payload: {
          message: error.message,
        },
      });
    }
  };

  return (
    <div className={classes.list}>
      <List>
        {isAuthenticated && (
          <>
            <ListItem button component={Link} to={REGISTER_USER_ROUTE}>
              <Avatar className={classes.avatarSize} src={user.photoURL} />
              <ListItemText
                className={classes.listItemText}
                primary={user.firstName}
              />
            </ListItem>

            <ListItem button onClick={doLogout}>
              <ListItemText className={classes.listItemText} primary='Logout' />
            </ListItem>
          </>
        )}
      </List>
    </div>
  );
};

export default RightMenu;
