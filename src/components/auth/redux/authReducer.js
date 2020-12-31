import store from 'store';
import {AUTH_SET_ERRORS, AUTH_SET_SUBMITTING, LOGIN_USER, LOGOUT_USER} from "./types";

const initialState = {
  user: store.get('store.auth.user') || null,
  validationErrors: {
    email: "",
  },
  submitting: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_ERRORS:
      return {...state, validationErrors: action.payload};
    case AUTH_SET_SUBMITTING:
      return {...state, submitting: action.payload};
    case LOGIN_USER:
      return {...state, user: action.payload};
    case LOGOUT_USER:
      return {...state, user: null}
    default:
      return state;
  }
};

export default authReducer;