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
  REQ_ARTICLES_AUTHOR,
  REQ_ARTICLES_CATEGORY,
  REQ_ARTICLE_LIKE,
  REQ_ARTICLE_DISLIKE,
} from "../actions/types";

import {
  articlesReqSuccess,
  articlesReqFailure,
  getAnArticleSuccess,
  postANewArticleSuccess,
  reqArticleByAuthorSuccess,
  reqArticlesByCategorySuccess,
  articleLikeReqSuccess,
  articleDislikeReqSuccess,
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

function* reqArticlesByAuthorAsync(action) {
  try {
    const response = [];
    yield put(reqArticleByAuthorSuccess(response));
  } catch (error) {
    console.log(error);
  }
}

function* reqArticlesByCategoryAsync(action) {
  try {
    const response = [];
    yield put(reqArticlesByCategorySuccess(response));
  } catch (error) {
    console.log(error);
  }
}

/* LIKE an article */
function* likeAnArticleAsync(action) {
  try {
    const response = [];
    yield put(articleLikeReqSuccess(response));
    yield put({ type: REQ_ARTICLES });
  } catch (error) {
    console.log(error);
  }
}

/* dislike an article */
function* disLikeAnArticleAsync(action) {
  try {
    const response = [];
    yield put(articleDislikeReqSuccess(response));
    yield put({ type: REQ_ARTICLES });
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

function* articlesByAuthorWatcher() {
  yield takeLatest(REQ_ARTICLES_AUTHOR, reqArticlesByAuthorAsync);
}

function* articlesByCategoryWatcher() {
  yield takeLatest(REQ_ARTICLES_CATEGORY, reqArticlesByCategoryAsync);
}

function* likeAnArticleWatcher() {
  yield takeLatest(REQ_ARTICLE_LIKE, likeAnArticleAsync);
}

function* disLikeAnArticleWatcher() {
  yield takeLatest(REQ_ARTICLE_DISLIKE, disLikeAnArticleAsync);
}

export function* articleSaga() {
  yield all([
    call(usersFeedWatcher),
    call(getAnArticleWatcher),
    call(newArticleWatcher),
    call(articlesByAuthorWatcher),
    call(articlesByCategoryWatcher),
    call(likeAnArticleWatcher),
    call(disLikeAnArticleWatcher),
  ]);
}
