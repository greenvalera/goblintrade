import {AUTH_SET_ERRORS, AUTH_SET_SUBMITTING} from "./types";

const initialState = {
  user: {
    firstName: null,
    lastName: null,
  },
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
    default:
      return state;
  }
};

export default authReducer;