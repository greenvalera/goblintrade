import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {createStyles, withStyles} from '@material-ui/core/styles';
import Copyright from "./Copyright";
import { Formik } from 'formik';
import { loginSchema } from './fieldValidation'
import PropTypes from "prop-types";
import {Email, Password} from "./fields";


const styles = theme => createStyles({
      root: {
          height: '100vh',
      },
      image: {
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      },
      paper: {
          margin: theme.spacing(8, 4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
      },
      avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
      },
      form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
      },
      submit: {
          margin: theme.spacing(3, 0, 2),
      },
  }
);

const initialFormValues = {
    email: "",
    password: "",
    rememberMe: false,
};

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({...this.state});
    };

    render() {
        const { classes } = this.props;

        return (
          <Grid container component="main" className={classes.root}>
              <CssBaseline />
              <Grid item xs={false} sm={4} md={7} className={classes.image} />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                  <div className={classes.paper}>
                      <Avatar className={classes.avatar}>
                          <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h5">
                          Sign in
                      </Typography>
                      <Formik
                        handleChange={this.onChange}
                        initialValues={initialFormValues}
                        validationSchema={loginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(true);
                            this.props.onSubmit(values);
                        }}
                      >
                          {({
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            }) => {

                              return (
                                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                  <Email
                                    margin="normal"
                                    error={errors.email}
                                    touched={touched.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                  />
                                  <Password
                                    margin="normal"
                                    error={errors.password}
                                    touched={touched.password}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                  />
                                    <FormControlLabel
                                      control={<Checkbox value="remember" color="primary"/>}
                                      label="Remember me"
                                    />
                                    <Button
                                      type="submit"
                                      fullWidth
                                      variant="contained"
                                      color="primary"
                                      className={classes.submit}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/register" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Box mt={5}>
                                        <Copyright/>
                                    </Box>
                                </form>
                              )
                          }}
                      </Formik>
                  </div>
              </Grid>
          </Grid>
        );
    }
}

SignUp.propTypes = {
    submitting: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignUp);