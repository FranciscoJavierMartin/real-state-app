import React from 'react';
import { Snackbar, SnackbarProps } from '@material-ui/core';

interface ICustomSnackbarProp extends SnackbarProps {
  message: string;
  open: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomSnackbar: React.FC<ICustomSnackbarProp> = (props) => {
  const { open, message, setOpenSnackbar } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      autoHideDuration={6000}
      onClose={() => setOpenSnackbar(false)}
      {...props}
      open={open}
      message={message}
    />
  );
};

export default CustomSnackbar;
