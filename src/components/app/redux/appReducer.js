import {APP_HIDE_ALERT, APP_SHOW_ALERT} from "./types";

const initialState = {
    alert: {
        message: null,
        open: false,
        type: null,
    }
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_SHOW_ALERT:
            return {...state, alert: {open: true, message: action.payload.message, type: action.payload.type}};
        case APP_HIDE_ALERT:
            return {...state, alert: {open: false, message: null, type: null}};
        default:
            return state;
    }
};

export default appReducer;