/* eslint-disable */
import { takeEvery, call, all, put, takeLatest } from "redux-saga/effects";

import { loginSuccess, loginFailed } from "../actions/login";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/types";

import { loginApi } from "../../api/apicalls";

function* loginAsync(action) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailed(error.message));
  }
}

function* logoutAsync() {}

function* logoutWatcher() {
  yield takeEvery(LOGIN_START, loginAsync);
}

export function* loginWatcher() {
  yield takeEvery(LOGIN_START, loginAsync);
}

export function* loginSaga() {
  yield all([call(loginWatcher)]);
}
