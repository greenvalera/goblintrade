import {registerByUsernameAndPassword} from "../../../db/auth";
import {getValidationErrors} from "../services/authService";
import {AUTH_SET_ERRORS, AUTH_SET_SUBMITTING} from "./types";
import {showAlert} from "../../../redux/actions";

export function register(user) {
  return async dispatch => {
    const { firstName, lastName, email, password } = user;

    dispatch(setAuthSubmitting(true));
    registerByUsernameAndPassword(
      email,
      password,
      firstName,
      lastName
    ).then(() => {
      dispatch(showAlert(`You are registered as ${firstName} ${lastName}`, "success"));
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