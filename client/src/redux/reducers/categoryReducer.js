/* eslint-disable */
import {
  REQ_CATEGORIES_SUCCESS,
  REQ_ALL_CATEGORIES_SUCCESS,
} from "../actions/types";

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case REQ_CATEGORIES_SUCCESS:
      return { ...state, ...action.payload };
    case REQ_ALL_CATEGORIES_SUCCESS:
      return { ...state, all: action.payload };
  }

  return state;
};

export default categoryReducer;
