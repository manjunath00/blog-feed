/* eslint-disable */
import { takeEvery, call, all, put, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";

import {
  loginSuccess,
  loginFailed,
  signoutSuccess,
  signUpSuccess,
} from "../actions/auth";
import { LOGIN_START, SIGN_OUT_START, SIGN_UP_START } from "../actions/types";
import { loginApi, signout, signUp } from "../../api/apicalls";

function* loginAsync(action) {
  try {
    const response = yield call(loginApi, action.payload);
    const auth = {
      _id: response.data.user._id,
      email: response.data.user.email,
      name: response.data.user.firstName,
    };

    yield put(loginSuccess(auth));
  } catch (error) {
    yield put(loginFailed(error.message));
  }
}

function* signoutAsync() {
  try {
    const response = yield call(signout);
    yield put(signoutSuccess());
  } catch (error) {
    console.log(error);
  }
}

function* signUpAsync(action) {
  try {
    const response = yield call(signUp, action.payload);
    yield put(signUpSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* loginWatcher() {
  yield takeEvery(LOGIN_START, loginAsync);
}

function* signoutWatcher() {
  yield takeEvery(SIGN_OUT_START, signoutAsync);
}

function* signUpWatcher() {
  yield takeEvery(SIGN_UP_START, signUpAsync);
}

export function* loginSaga() {
  yield all([call(loginWatcher), call(signoutWatcher), call(signUpWatcher)]);
}
