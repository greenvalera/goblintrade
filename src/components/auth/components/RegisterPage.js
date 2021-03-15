import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {createStyles, withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "./Copyright";
import { Formik } from 'formik';
import { registerSchema } from './fieldValidation';
import {Email, Password} from "./fields";


const styles = theme => createStyles({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange() {
    this.props.onChange();
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({...this.state});
  };

  render() {
    const {classes, validationErrors} = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            handleChange={this.onChange}
            initialValues={initialFormValues}
            validate={() => {
              const errors = {};
              if (validationErrors.email) {
                errors.email = validationErrors.email;
              }
              return errors;
            }}
            validationSchema={registerSchema}
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
                isSubmitting,
                setSubmitting,
                validateForm,
                /* and other goodies */
              }) => {
                if (isSubmitting !== this.props.submitting) {
                  setSubmitting(this.props.submitting);
                  validateForm();
                }

                //TODO useCallback to memoize
                const onChange = (event) => {
                  handleChange(event);
                  this.onChange(event);
                };

                return (
                  <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          error={errors.firstName && touched.firstName}
                          helperText={errors.firstName && touched.firstName && errors.firstName}
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          error={errors.lastName && touched.lastName}
                          helperText={errors.lastName && touched.lastName && errors.lastName}
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Email
                          error={errors.email}
                          touched={touched.email}
                          handleChange={onChange}
                          handleBlur={handleBlur}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Password
                          error={errors.password}
                          touched={touched.password}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <Link href="/login" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                )
              }}
          </Formik>
        </div>
        <Box mt={5}>
          <Copyright/>
        </Box>
      </Container>
    );
  }
}

SignUp.propTypes = {
  submitting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  validationErrors: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
};

export default withStyles(styles)(SignUp);