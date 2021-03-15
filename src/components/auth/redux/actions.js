import store from 'store';
import {registerByUsernameAndPassword, signInWithEmailAndPassword} from "db/auth";
import {AUTH_SET_ERRORS, AUTH_SET_SUBMITTING, LOGIN_USER, LOGOUT_USER} from "./types";
import {showAlert} from "components/app/actions";

const getValidationErrors = (error) => {
  let validationErrors = {};
  if (!error) return validationErrors;

  switch (error.code) {
    case 'auth/email-already-in-use':
      validationErrors.email = error.message;
      break;
    default:
      validationErrors = {};
  }

  return validationErrors;
}

export function register(user) {
  return async dispatch => {
    const { firstName, lastName, email, password } = user;

    dispatch(setAuthSubmitting(true));
    registerByUsernameAndPassword(
      email,
      password,
      firstName,
      lastName
    ).then((user) => {
      dispatch(setAuthSubmitting(false));
      dispatch(loginUser(user));
    }).catch(error => {
      const validationErrors = getValidationErrors(error);
      if (validationErrors.email) {
        dispatch(setAuthErrors(validationErrors));
        dispatch(setAuthSubmitting(false));
      } else {
        dispatch(showAlert(error.message));
      }
    });
  }
}

export function auth(user) {
  return async dispatch => {
    const { email, password } = user;

    dispatch(setAuthSubmitting(true));
    try {
      const user = await signInWithEmailAndPassword(email, password);
      dispatch(loginUser(user));
    } catch (error) {
      console.log(error);
    }
  }
}

export function setAuthErrors(errors) {
  return {
    type: AUTH_SET_ERRORS,
    payload: errors,
  }
}

export function setAuthSubmitting(submitting) {
  return {
    type: AUTH_SET_SUBMITTING,
    payload: submitting,
  }
}

export function loginUser(user) {
  store.set('store.auth.user', user);
  return {
    type: LOGIN_USER,
    payload: user,
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}