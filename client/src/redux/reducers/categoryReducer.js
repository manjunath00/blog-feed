/* eslint-disable */
import {
  REQ_CATEGORIES_SUCCESS,
  REQ_CATEGORIES_FAILURE,
} from "../actions/types";

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case REQ_CATEGORIES_SUCCESS:
      return { ...state, ...action.payload };
    case REQ_CATEGORIES_FAILURE:
      return state;
  }

  return state;
};

export default categoryReducer;
