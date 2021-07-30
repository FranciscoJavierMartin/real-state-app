import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import BarSession from './bar/BarSession';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    desktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    mobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });

interface INavbarProps extends WithStyles<typeof styles> {}

const Navbar: React.FC<INavbarProps> = ({ classes }) => {
  return (
    <AppBar position='static'>
      <BarSession />
    </AppBar>
  );
};

export default withStyles(styles)(Navbar);
