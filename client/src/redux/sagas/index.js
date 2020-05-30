import { all, call } from "redux-saga/effects";

import { loginSaga } from "./auth.saga";
import { articleSaga } from "./article.saga";
import { categorySaga } from "./category.saga";

export default function* rootSaga() {
  yield all([call(loginSaga), call(articleSaga), call(categorySaga)]);
}
