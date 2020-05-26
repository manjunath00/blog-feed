import { all, call } from "redux-saga/effects";

import { loginSaga } from "./auth.saga";

export default function* rootSaga() {
  yield all([call(loginSaga)]);
}
