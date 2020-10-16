import React from 'react';
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
  return (
    <Toolbar>
      <IconButton color='inherit'>
        <i className='material-icons'>menu</i>
      </IconButton>
      <Typography variant='h6'>Holiday Homes</Typography>
      <div className={classes.grow}></div>
      <div className={classes.sectionDesktop}>
        <Button color='inherit'>Login</Button>
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
