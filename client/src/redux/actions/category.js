/* eslint-disable */
import {
  REQ_CATEGORIES,
  REQ_CATEGORIES_SUCCESS,
  REQ_CATEGORIES_FAILURE,
} from "./types";

/* get user's category preferences */
const reqUserCategories = () => {
  return {
    type: REQ_CATEGORIES,
  };
};

const reqUserCategoriesSuccess = (data) => {
  return {
    type: REQ_CATEGORIES_SUCCESS,
    payload: data,
  };
};

const reqUserCategoriesFailure = (data) => {
  return {
    type: REQ_CATEGORIES_FAILURE,
    payload: "",
  };
};

export {
  reqUserCategories,
  reqUserCategoriesSuccess,
  reqUserCategoriesFailure,
};
