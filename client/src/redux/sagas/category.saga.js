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

import { REQ_CATEGORIES } from "../actions/types";
import {
  reqUserCategoriesSuccess,
  reqUserCategoriesFailure,
} from "../actions/category";
import { getUserCategories } from "../../api/apicalls";

function* getUsersCategoriesAsync() {
  try {
    const auth = yield select(getToken);
    const response = yield call(getUserCategories, auth._id);
    console.log(response.data);
    yield put(reqUserCategoriesSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* usersCategoriesWatcher() {
  yield takeLatest(REQ_CATEGORIES, getUsersCategoriesAsync);
}

export function* categorySaga() {
  yield all([call(usersCategoriesWatcher)]);
}
