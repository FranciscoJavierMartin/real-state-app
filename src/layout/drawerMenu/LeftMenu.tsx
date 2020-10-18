import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';

interface ILeftMenuProps {
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

const LeftMenu: React.FC<ILeftMenuProps> = ({ classes }) => {
  const history = useHistory();

  return (
    <div className={classes.list}>
      <List>
        <ListItem component={Link} button to=''>
          <i className='material-icons'>account_box</i>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary='Profile'
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push('')}>
          <i className='material-icons'>add_box</i>
          <ListItemText
            key={1}
            classes={{ primary: classes.listItemText }}
            primary='New Home'
          />
        </ListItem>
        <ListItem button onClick={() => history.push('')}>
          <i className='material-icons'>business</i>
          <ListItemText
            key={1}
            classes={{ primary: classes.listItemText }}
            primary='Home List'
          />
        </ListItem>
        <ListItem button onClick={() => history.push('')}>
          <i className='material-icons'>mail_outline</i>
          <ListItemText
            key={1}
            classes={{ primary: classes.listItemText }}
            primary='Messages'
          />
        </ListItem>
      </List>
    </div>
  );
};

export default LeftMenu;
