/* eslint-disable */
import { combineReducers } from "redux";

import authReducer from "./authReducer";
import articlesReducer from "./articleReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articlesReducer,
  category: categoryReducer,
});

export default rootReducer;
