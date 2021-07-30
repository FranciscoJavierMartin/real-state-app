import React from 'react';
import {
  CircularProgress,
  Button,
  withStyles,
  ButtonProps,
  Theme,
  createStyles,
  WithStyles,
} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    spinner: {
      marginLeft: 5,
    },
  });

interface ISpinnerProgressProps extends WithStyles<typeof styles> {}
// TODO: Remove 'any' from props type
const SpinnerAdornment = withStyles(styles)(({ classes }: any) => (
  <CircularProgress className={classes.spinner} size={20} />
));

interface ILoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

const LoadingButton: React.FC<ILoadingButtonProps> = ({
  children,
  loading,
  ...rest
}) => (
  <Button {...rest}>
    {children}
    {loading && <SpinnerAdornment />}
  </Button>
);

export default LoadingButton;
