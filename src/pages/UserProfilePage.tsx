import React, { useEffect, useState } from 'react';
import {
  Grid,
  Avatar,
  Container,
  createStyles,
  TextField,
  Theme,
  Typography,
  WithStyles,
  withStyles,
  Button,
} from '@material-ui/core';
import { useStateValue } from '../store/StateProvider';
import { IUserProfileFormValues } from '../common/interfaces/forms';
import { updateUserProfile } from '../api/auth';
import { authActionNames, snackbarActionNames } from '../common/constants/actionNames';
import ImageUploader from 'react-images-upload';
import { v4 as uuidv4 } from 'uuid';
import { getDocument, saveDocument } from '../api/storage';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {},
    form: {
      width: '100%',
      marginTop: 20,
    },
    container: {
      justifyContent: 'center',
    },
    submit: {
      marginTop: 15,
      marginBottom: 20,
    },
  });

interface IUserProfilePageProps extends WithStyles<typeof styles> {}

const UserProfilePage: React.FC<IUserProfilePageProps> = ({ classes }) => {
  const { state, dispatch } = useStateValue();
  const { user } = state.auth;
  const [formValues, setFormValues] = useState<IUserProfileFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    photoURL: '',
  });

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((previousState: IUserProfileFormValues) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await updateUserProfile(formValues);
      dispatch({
        type: snackbarActionNames.OPEN_SNACKBAR,
        payload: {
          message: 'Changes saved',
        },
      });
    } catch (error) {
      dispatch({
        type: snackbarActionNames.OPEN_SNACKBAR,
        payload: {
          message: error.message,
        },
      });
    }
  };

  useEffect(() => {
    if (user.id) {
      setFormValues({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        photoURL: user.photoURL,
      });
    }
  }, [user.id]);

  const uploadPhoto = (photos: File[], pictures: string[]) => {
    const uniqueFilename = uuidv4();
    const fileExtension = photos[0].name.split('.').pop();
    const newPhotoName = `${uniqueFilename}.${fileExtension}`;
    saveDocument(newPhotoName, photos[0]).then(metadata => {
      getDocument(newPhotoName).then(urlPhoto => {
        setFormValues({
          ...formValues,
          photoURL: urlPhoto,
        });

        // Page 22
        updateUserProfile(formValues)
      })
    })
  };

  return (
    <Container className={classes.container}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar} src={user.photoURL} />
        <Typography component='h1' variant='h5'>
          User profile
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name='firstName'
                variant='outlined'
                fullWidth
                label='First Name'
                onChange={handleChangeInput}
                value={formValues.firstName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name='lastName'
                variant='outlined'
                fullWidth
                label='Last Name'
                value={formValues.lastName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name='email'
                variant='outlined'
                fullWidth
                label='Email'
                value={formValues.email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name='phone'
                variant='outlined'
                fullWidth
                label='Phone'
                value={formValues.phone}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ImageUploader
                withIcon={false}
                key={1000}
                singleImage={true}
                buttonText='Choose an image to upload'
                onChange={uploadPhoto}
                imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
              />
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Grid item xs={12} md={6}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                size='large'
                color='primary'
                className={classes.submit}
              >
                Save changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withStyles(styles)(UserProfilePage);
