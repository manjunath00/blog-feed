/* eslint-disable */

import {
  takeEvery,
  call,
  all,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";

import { REQ_ARTICLES, REQ_AN_ARTICLE } from "../actions/types";
import {
  articlesReqSuccess,
  articlesReqFailure,
  getAnArticleSuccess,
} from "../actions/article";
import { getUsersFeed, getAnArticle } from "../../api/apicalls";

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

function* getAnArticleAsync(action) {
  try {
    const auth = yield select(getToken);
    const response = yield call(getAnArticle, auth._id, action.payload);
    yield put(getAnArticleSuccess(response.data));
  } catch (err) {
    console.log(err)
  }
}

function* usersFeedWatcher() {
  yield takeEvery(REQ_ARTICLES, getUsersFeedAsync);
}

function* getAnArticleWatcher() {
  yield takeEvery(REQ_AN_ARTICLE, getAnArticleAsync);
}

export function* articleSaga() {
  yield all([call(usersFeedWatcher), call(getAnArticleWatcher)]);
}
