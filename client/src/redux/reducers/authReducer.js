/* eslint-disable */
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from "../actions/types.js";
import { loadState } from "../store/localStorage";

const auth = loadState() ? loadState().buzzfeed.auth : {};

const authReducer = (state = auth, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload, isAuthenticated: true };
    case LOGIN_FAILURE:
      return { ...state, ...action.payload };
    case SIGN_OUT_SUCCESS:
      return { ...action.payload};

    default:
      return state;
  }
};

export default authReducer;
