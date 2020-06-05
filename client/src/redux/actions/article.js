/* eslint-disable */
import {
  // REQ_ARTICLE_EDIT,
  REQ_ARTICLES,
  REQ_ARTICLES_SUCCESS,
  REQ_ARTICLES_FAILURE,
  REQ_AN_ARTICLE,
  REQ_AN_ARTICLE_SUCCESS,
  REQ_AN_ARTICLE_FAILURE,
  POST_ARTICLE_NEW,
  POST_ARTICLE_NEW_SUCCESS,
  REQ_ARTICLES_AUTHOR,
  REQ_ARTICLES_AUTHOR_SUCCESS,
  REQ_ARTICLES_CATEGORY,
  REQ_ARTICLES_CATEGORY_SUCCESS,
  REQ_ARTICLE_LIKE_SUCCESS,
  REQ_ARTICLE_LIKE,
  REQ_ARTICLE_DISLIKE,
  REQ_ARTICLE_DISLIKE_SUCCESS,
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

const getAnArticle = (articleId) => {
  console.log(articleId);
  return {
    type: REQ_AN_ARTICLE,
    payload: articleId,
  };
};

const getAnArticleSuccess = (data) => {
  return {
    type: REQ_AN_ARTICLE_SUCCESS,
    payload: data,
  };
};

const getAnArticleFailure = (data) => {
  return {
    type: REQ_AN_ARTICLE_FAILURE,
    payload: data,
  };
};

/* post a new article */
const postANewArticle = (data) => {
  console.log(data);
  return {
    type: POST_ARTICLE_NEW,
    payload: data,
  };
};

const postANewArticleSuccess = (data) => {
  console.log(data);
  return {
    type: POST_ARTICLE_NEW_SUCCESS,
    payload: data,
  };
};

/* articles by author */
const reqArticleByAuthor = (userId) => {
  return {
    type: REQ_ARTICLES_AUTHOR,
    payload: userId,
  };
};

const reqArticleByAuthorSuccess = (articles) => {
  return {
    type: REQ_ARTICLES_AUTHOR_SUCCESS,
    payload: articles,
  };
};

/* articles by category */

const reqArticlesByCategorySuccess = (articles) => {
  return {
    type: REQ_ARTICLES_CATEGORY_SUCCESS,
    payload: articles,
  };
};

const reqArticlesByCategory = (categoryId) => {
  return {
    type: REQ_ARTICLES_CATEGORY,
    payload: categoryId,
  };
};

const articleEditReq = (data) => {
  return {
    type: REQ_ARTICLE_EDIT,
    payload: data,
  };
};

/* LIKE an article */

const articleLikeReq = (articleId) => {
  return {
    type: REQ_ARTICLE_LIKE,
    payload: articleId,
  };
};

const articleLikeReqSuccess = (data) => {
  return {
    type: REQ_ARTICLE_LIKE_SUCCESS,
  };
};

/* DISLIKE an article */

const articleDislikeReq = (articleId) => {
  return {
    type: REQ_ARTICLE_DISLIKE,
    payload: articleId,
  };
};

const articleDislikeReqSuccess = (data) => {
  return {
    type: REQ_ARTICLE_DISLIKE_SUCCESS,
  };
};

export { articlesReq, articlesReqSuccess, articlesReqFailure };
export { getAnArticle, getAnArticleSuccess, getAnArticleFailure };
export { postANewArticle, postANewArticleSuccess };

export {
  reqArticleByAuthor,
  reqArticleByAuthorSuccess,
  reqArticlesByCategory,
  reqArticlesByCategorySuccess,
};

export {
  articleLikeReq,
  articleLikeReqSuccess,
  articleDislikeReq,
  articleDislikeReqSuccess,
};
