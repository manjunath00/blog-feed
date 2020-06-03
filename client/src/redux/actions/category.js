/* eslint-disable */
import {
  REQ_CATEGORIES,
  REQ_CATEGORIES_SUCCESS,
  REQ_CATEGORIES_FAILURE,
  REQ_ALL_CATEGORIES,
  REQ_ALL_CATEGORIES_SUCCESS,
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

/* all categories */
const getAllCategories = () => {
  return {
    type: REQ_ALL_CATEGORIES,
  };
};

const getAllCategoriesSuccess = (data) => {
  return {
    type: REQ_ALL_CATEGORIES_SUCCESS,
    payload: data,
  };
};

export {
  reqUserCategories,
  reqUserCategoriesSuccess,
  reqUserCategoriesFailure,
  getAllCategories,
  getAllCategoriesSuccess,
};
