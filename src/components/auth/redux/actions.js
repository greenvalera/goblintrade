import {registerByUsernameAndPassword} from "../../../db/auth";
import {getValidationErrors} from "../services/authService";
import {AUTH_SET_ERRORS, AUTH_SET_SUBMITTING, LOGIN_USER, LOGOUT_USER} from "./types";
import {showAlert} from "../../app/redux/actions";

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