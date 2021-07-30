import React from 'react';
import {
  Breadcrumbs,
  Container,
  createStyles,
  Grid,
  Link,
  Paper,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      paddingTop: '8px',
    },
    paper: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
    },
    link: {
      display: 'flex',
    },
    homeIcon: {
      height: 20,
      width: 20,
      marginRight: '4px',
    },
  });

interface INewHomePageProps extends WithStyles<typeof styles> {}

const NewHome: React.FC<INewHomePageProps> = ({ classes }) => {
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Breadcrumbs aria-label='breadcrumb'>
              <Link color='inherit' className={classes.link} href='/'>
                <HomeIcon className={classes.homeIcon}></HomeIcon>
              </Link>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default withStyles(styles)(NewHome);
