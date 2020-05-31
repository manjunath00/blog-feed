import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from "./types";

export const loginStart = (data) => {
  return {
    type: LOGIN_START,
    payload: data,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailed = (message) => {
  return {
    type: LOGIN_FAILURE,
    payload: { message },
  };
};

/* sign out */
export const signoutStart = () => {
  return {
    type: SIGN_OUT_START,
  };
};

export const signoutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
    payload: {
      isAuthenticated: false,
      userId: undefined,
      name: undefined,
      _id: undefined,
    },
  };
};

export const signoutFailure = () => {
  return {
    type: SIGN_OUT_FAILURE,
  };
};
