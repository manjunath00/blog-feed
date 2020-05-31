/* eslint-disable */
import { takeEvery, call, all, put, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";

import { loginSuccess, loginFailed } from "../actions/login";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/types"; 
import { loginApi } from "../../api/apicalls";

function* loginAsync(action) {
  try {
    const response = yield call(loginApi, action.payload);
    const auth = {
      _id: response.data.user._id,
      email: response.data.user.email,
    };
   
    yield put(loginSuccess(auth));
  } catch (error) {
    yield put(loginFailed(error.message));
  }
}

// function* logoutAsync() {}

// function* logoutWatcher() {
//   yield takeEvery(LOGIN_START, loginAsync);
// }

function* loginWatcher() {
  yield takeEvery(LOGIN_START, loginAsync);
}

export function* loginSaga() {
  yield all([call(loginWatcher)]);
}
