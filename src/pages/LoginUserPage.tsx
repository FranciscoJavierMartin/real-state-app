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
  const [formValues, setFormValues] = useState<ILoginFormValues>({
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
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
            required
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
            required
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
