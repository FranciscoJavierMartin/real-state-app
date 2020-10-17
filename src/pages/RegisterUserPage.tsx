import React, { useState } from 'react';
import {
  Avatar,
  Container,
  createStyles,
  Grid,
  TextField,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import { loginUser, registerUser } from '../api/auth';
import LoadingButton from '../common/components/LoadingButton';
import { IRegisterFormValues } from '../common/interfaces/forms';
import { useHistory } from 'react-router-dom';
import { HOME_LIST_ROUTE } from '../common/routes';
import CustomSnackbar from '../common/components/CustomSnackbar';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: 8,
      backgroundColor: '#e53935',
    },
    form: {
      width: '100%',
      marginTop: 10,
    },
    formInput: {
      width: '100%',
    },
    submit: {
      marginTop: 15,
      marginBottom: 20,
    },
  });

interface IRegisterUserPageProps extends WithStyles<typeof styles> {}

const RegisterUserPage: React.FC<IRegisterUserPageProps> = ({ classes }) => {
  const history = useHistory();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [formValues, setFormValues] = useState<IRegisterFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrorValues, setFormErrorValues] = useState<IRegisterFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handlerInputChange = (
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
    let isValid = true;

    if (!formValues.firstName) {
      isValid = false;
      setFormErrorValues({
        ...formErrorValues,
        firstName: 'First name is required',
      });
    }

    if (!formValues.lastName) {
      isValid = false;
      setFormErrorValues({
        ...formErrorValues,
        lastName: 'Last name is required',
      });
    }

    if (!formValues.email) {
      isValid = false;
      setFormErrorValues({
        ...formErrorValues,
        email: 'Email is required',
      });
    }

    if (!formValues.password) {
      isValid = false;
      setFormErrorValues({
        ...formErrorValues,
        password: 'Password is required',
      });
    }

    if (isValid) {
      try {
        await registerUser(formValues);
        await loginUser({
          email: formValues.email,
          password: formValues.password,
        });
        history.push(HOME_LIST_ROUTE);
      } catch (error) {
        setOpenSnackbar(true);
        setSnackbarMessage(error.message);
      }
    }
  };

  return (
    <Container maxWidth='md'>
      <div className={classes.paper}>
        <CustomSnackbar
          open={openSnackbar}
          setOpenSnackbar={setOpenSnackbar}
          message={snackbarMessage}
        />
        <Avatar className={classes.avatar}>
          <LockOutlineIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          User Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2} direction='column' alignItems='center'>
            <Grid item md={6} xs={12} className={classes.formInput}>
              <TextField
                name='firstName'
                fullWidth
                label='Name'
                value={formValues.firstName}
                onChange={handlerInputChange}
                error={!!formErrorValues.firstName}
                helperText={formErrorValues.firstName}
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.formInput}>
              <TextField
                name='lastName'
                fullWidth
                label='Last name'
                value={formValues.lastName}
                onChange={handlerInputChange}
                error={!!formErrorValues.lastName}
                helperText={formErrorValues.lastName}
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.formInput}>
              <TextField
                type='email'
                name='email'
                fullWidth
                label='Email address'
                value={formValues.email}
                onChange={handlerInputChange}
                error={!!formErrorValues.email}
                helperText={formErrorValues.email}
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.formInput}>
              <TextField
                type='password'
                name='password'
                fullWidth
                label='Password'
                value={formValues.password}
                onChange={handlerInputChange}
                error={!!formErrorValues.password}
                helperText={formErrorValues.password}
              />
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Grid item xs={12} md={6}>
              <LoadingButton
                type='submit'
                variant='contained'
                fullWidth
                size='large'
                color='primary'
                className={classes.submit}
              >
                Register
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withStyles(styles)(RegisterUserPage);
