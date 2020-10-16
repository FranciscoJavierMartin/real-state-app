import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import BarSession from './bar/BarSession';

const Navbar: React.FC = () => {
  return (
    <AppBar position='static'>
      <BarSession/>
    </AppBar>
  );
};

export default Navbar;
