import React, { useState } from 'react';
import {
  Avatar,
  Container,
  createStyles,
  TextField,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import LoadingButton from '../common/components/LoadingButton';
import { ILoginFormValues } from '../common/interfaces/forms';
import { loginUser } from '../api/auth';
import { useHistory } from 'react-router-dom';
import { HOME_LIST_ROUTE } from '../common/routes';
import { useStateValue } from '../store/StateProvider';
import { snackbarActionNames } from '../common/constants/actionNames';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      marginTop: 9,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: 5,
      backgroundColor: 'red',
    },
    form: {
      width: '100%',
      marginTop: 8,
    },
  });

interface ILoginUserPageProps extends WithStyles<typeof styles> {}

const LoginUserPage: React.FC<ILoginUserPageProps> = ({ classes }) => {
  const { dispatch } = useStateValue();
  const history = useHistory();
  const [formValues, setFormValues] = useState<ILoginFormValues>({
    email: '',
    password: '',
  });
  const [formErrorValues, setFormErrorValues] = useState<ILoginFormValues>({
    email: '',
    password: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const { email, password } = formValues;
    let isValid = true;

    if (!email) {
      isValid = false;
      setFormErrorValues({
        ...formErrorValues,
        email: 'Email is required',
      });
    }

    if (!password) {
      isValid = false;
      setFormErrorValues({
        ...formErrorValues,
        password: 'Password is required',
      });
    }

    if (isValid) {
      try {
        await loginUser(formValues);
        history.push(HOME_LIST_ROUTE);
      } catch (error) {
        dispatch({
          type: snackbarActionNames.OPEN_SNACKBAR,
          payload: error.message,
        });
      }
    }
  };

  return (
    <Container maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlineIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login User
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            label='Email'
            name='email'
            fullWidth
            margin='normal'
            value={formValues.email}
            onChange={handleInputChange}
            error={!!formErrorValues.email}
            helperText={formErrorValues.email}
          />
          <TextField
            variant='outlined'
            type='password'
            label='Password'
            name='password'
            fullWidth
            margin='normal'
            value={formValues.password}
            onChange={handleInputChange}
            error={!!formErrorValues.password}
            helperText={formErrorValues.password}
          />
          <LoadingButton
            fullWidth
            variant='contained'
            color='primary'
            type='submit'
          >
            Login
          </LoadingButton>
        </form>
      </div>
    </Container>
  );
};

export default withStyles(styles)(LoginUserPage);
