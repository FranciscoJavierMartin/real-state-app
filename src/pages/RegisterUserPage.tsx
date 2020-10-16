import React, { useState } from 'react';
import {
  Avatar,
  Button,
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

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IRegisterUserPageProps extends WithStyles<typeof styles> {}

const RegisterUserPage: React.FC<IRegisterUserPageProps> = ({ classes }) => {
  const [formValues, setFormValues] = useState<IFormValues>({
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <Container maxWidth='md'>
      <div className={classes.paper}>
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
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.formInput}>
              <TextField
                name='lastName'
                fullWidth
                label='Last name'
                value={formValues.lastName}
                onChange={handlerInputChange}
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
              />
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Grid item xs={12} md={6}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                size='large'
                color='primary'
                className={classes.submit}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withStyles(styles)(RegisterUserPage);
