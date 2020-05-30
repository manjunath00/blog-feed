/* eslint-disable */

import {
  takeEvery,
  call,
  all,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";

import {
  REQ_ARTICLES, 
} from "../actions/types";
import { articlesReqSuccess, articlesReqFailure } from "../actions/article";
import { getUsersFeed } from "../../api/apicalls";

const getToken = (state) => {
  return state.auth;
};

function* getUsersFeedAsync() {
  try {
    const auth = yield select(getToken);
    const response = yield call(getUsersFeed, auth._id); 
    yield put(articlesReqSuccess(response.data));
  } catch (error) { 
    yield put(articlesReqFailure(error));
  }
}

function* usersFeedWatcher() {
  yield takeEvery(REQ_ARTICLES, getUsersFeedAsync);
}

export function* articleSaga() {
  yield all([call(usersFeedWatcher)]);
}
