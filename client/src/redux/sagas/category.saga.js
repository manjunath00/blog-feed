/* eslint-disable */

import {
  takeEvery,
  call,
  all,
  put,
  select,
  takeLatest,
} from "redux-saga/effects";

import getToken from "../../util/token";

import { REQ_CATEGORIES, REQ_ALL_CATEGORIES } from "../actions/types";
import {
  reqUserCategoriesSuccess,
  getAllCategoriesSuccess,
} from "../actions/category";
import { getUserCategories, allCategories } from "../../api/apicalls";

function* getUsersCategoriesAsync() {
  try {
    const auth = yield select(getToken);
    const response = yield call(getUserCategories, auth._id);
    yield put(reqUserCategoriesSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* getAllCategoriesAsync() {
  try {
    const response = yield call(allCategories);
    yield put(getAllCategoriesSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* usersCategoriesWatcher() {
  yield takeLatest(REQ_CATEGORIES, getUsersCategoriesAsync);
}

function* getAllCategoriesWatcher() {
  yield takeLatest(REQ_ALL_CATEGORIES, getAllCategoriesAsync);
}

export function* categorySaga() {
  yield all([call(usersCategoriesWatcher), call(getAllCategoriesWatcher)]);
}
