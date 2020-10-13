import {registerByUsernameAndPassword} from "../db/auth";
import {SHOW_ALERT, HIDE_ALERT, USER_SET_ERRORS, AUTH_SET_SUBMITTING} from "./types";
import {getValidationErrors} from "../components/waypoint/services/auth";

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
        type: USER_SET_ERRORS,
        payload: errors,
    }
}

export function setAuthSubmitting(submitting) {
    return {
        type: AUTH_SET_SUBMITTING,
        payload: submitting,
    }
}

export function showAlert(message, type = "error") {
    return {
        type: SHOW_ALERT,
        payload: {
            message,
            type
        }
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}