/* eslint-disable */
import {
  // REQ_ARTICLE_NEW,
  // REQ_ARTICLE_EDIT,
  // REQ_ARTICLE_LIKE,
  // REQ_ARTICLE_DISLIKE,
  REQ_ARTICLES,
  REQ_ARTICLES_SUCCESS,
  REQ_ARTICLES_FAILURE,
} from "./types";

const articlesReq = () => {  
  return {
    type: REQ_ARTICLES, 
  };
};

const articlesReqSuccess = (data) => {
  console.log("Article Saga Action 0", data);
  return {
    type: REQ_ARTICLES_SUCCESS,
    payload: data,
  };
};

const articlesReqFailure = (data) => {
  return {
    type: REQ_ARTICLES_FAILURE,
    payload: data,
  };
};

// const articleNewReq = (data) => {
//   return {
//     type: REQ_ARTICLE_NEW,
//     payload: data,
//   };
// };

// const articleEditReq = (data) => {
//   return {
//     type: REQ_ARTICLE_EDIT,
//     payload: data,
//   };
// };

// const articleLikeReq = (data) => {
//   return {
//     type: REQ_ARTICLE_LIKE,
//     payload: data,
//   };
// };

// const articleDislikeReq = (data) => {
//   return {
//     type: REQ_ARTICLE_DISLIKE,
//     payload: data,
//   };
// };

export { articlesReq, articlesReqSuccess, articlesReqFailure };
