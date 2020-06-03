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
  REQ_AN_ARTICLE,
  POST_ARTICLE_NEW,
} from "../actions/types";

import {
  articlesReqSuccess,
  articlesReqFailure,
  getAnArticleSuccess,
  postANewArticleSuccess,
} from "../actions/article";

import {
  getUsersFeed,
  getAnArticle,
  createAnArticle,
} from "../../api/apicalls";

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
    console.log(err);
  }
}

function* postAnArticleAsync(action) {
  try {
    const auth = yield select(getToken);
    const response = yield call(createAnArticle, auth._id, {
      ...action.payload,
      authorId: auth._id,
    });
    yield put(postANewArticleSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* usersFeedWatcher() {
  yield takeEvery(REQ_ARTICLES, getUsersFeedAsync);
}

function* getAnArticleWatcher() {
  yield takeEvery(REQ_AN_ARTICLE, getAnArticleAsync);
}

function* newArticleWatcher() {
  yield takeEvery(POST_ARTICLE_NEW, postAnArticleAsync);
}

export function* articleSaga() {
  yield all([
    call(usersFeedWatcher),
    call(getAnArticleWatcher),
    call(newArticleWatcher),
  ]);
}
