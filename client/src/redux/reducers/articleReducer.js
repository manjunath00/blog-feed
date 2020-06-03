/* eslint-disable */
import {
  REQ_ARTICLES_SUCCESS,
  REQ_ARTICLES_FAILURE,
  REQ_AN_ARTICLE_FAILURE,
  REQ_AN_ARTICLE_SUCCESS,
  POST_ARTICLE_NEW_SUCCESS,
} from "../actions/types";

import { loadState } from "../store/localStorage";

const initialState = {
  all: [],
  article: "",
};

const articles = loadState() ? loadState().buzzfeed.articles : initialState;

const articleReducer = (state = articles, action) => {
  switch (action.type) {
    case REQ_ARTICLES_SUCCESS:
      return { all: action.payload, newArticle: false };
    case REQ_AN_ARTICLE_SUCCESS:
      return { ...state, article: action.payload, newArticle: false };
    case POST_ARTICLE_NEW_SUCCESS:
      return { ...state, newArticle: true };
  }

  return state;
};

export default articleReducer;
