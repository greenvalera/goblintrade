import {registerByUsernameAndPassword} from "../db/auth";
import {SHOW_ALERT, HIDE_ALERT} from "./types";

export function register(user) {
    return async dispatch => {
        const { firstName, lastName, email, password } = user;
        registerByUsernameAndPassword(
            email,
            password,
            firstName,
            lastName
        ).then(() => {
            dispatch(showAlert(`You are registered as ${firstName} ${lastName}`, "success"));
        }).catch(error => {
            dispatch(showAlert(error.message))
        });
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