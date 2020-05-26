/* eslint-disable */
import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { loadState, saveState } from "./localStorage";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const persistedStore = loadState();

const middlewares = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  persistedStore,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  const buzzfeed = store.getState();
  saveState(buzzfeed);
});

export default store;
