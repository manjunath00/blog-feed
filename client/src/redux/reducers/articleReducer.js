/* eslint-disable */
import {
  REQ_ARTICLES_SUCCESS,
  REQ_ARTICLES_FAILURE,
  REQ_AN_ARTICLE_FAILURE,
  REQ_AN_ARTICLE_SUCCESS,
} from "../actions/types";

const initialState = {
  all: [],
  article: "",
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQ_ARTICLES_SUCCESS:
      return { all: action.payload };
    case REQ_ARTICLES_FAILURE:
      return { ...state, ...action.payload };
    case REQ_AN_ARTICLE_SUCCESS:
      return { ...state, article: action.payload };
  }

  return state;
};

export default articleReducer;
