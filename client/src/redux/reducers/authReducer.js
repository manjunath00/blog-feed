/* eslint-disable */
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/types.js";
import { loadState } from "../store/localStorage";

const auth = loadState().buzzfeed.auth;

const authReducer = (state = auth, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload, isAuthenticated: true };
    case LOGIN_FAILURE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default authReducer;
