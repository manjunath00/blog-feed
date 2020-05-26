import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

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
