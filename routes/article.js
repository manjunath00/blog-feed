const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

const {
  getArticleById,
  isOriginalAuthor,
  createAnArticle,
  deleteAnArticle,
  editAnArticle,
  getAnArticle,
  getAllArticles,
  getUsersFeed,
  likeAnArticle,
  disLikeAnArticle,
  checkCategoryPref,
  checkLikesDislikesBlocks,
} = require("../controllers/article");

router.param("userId", getUserById);
router.param("articleId", getArticleById);

// create a new article
router.post(
  "/article/create/:userId",
  isSignedIn,
  isAuthenticated,
  createAnArticle
);

// edit an article
router.put(
  "/article/edit/:articleId/:userId",
  isSignedIn,
  isAuthenticated,
  isOriginalAuthor,
  editAnArticle
);

// delete an article
router.delete(
  "/article/delete/:articleId/:userId",
  isSignedIn,
  isAuthenticated,
  isOriginalAuthor,
  deleteAnArticle
);

// get an article
router.get(
  "/article/:articleId/:userId", 
  isSignedIn,
  isAuthenticated,
  getAnArticle
);

// get all articles
router.get("/articles/:userId/all", isSignedIn, isAuthenticated, getAllArticles);

// get all articles as per preferences
router.get("/articles/:userId/feed", isSignedIn, isAuthenticated, checkCategoryPref, getUsersFeed);

// like an article
router.patch(
  "/article/like/:articleId/:userId",
  [check("isLiked").isBoolean().withMessage("isLiked should be boolean")],
  isSignedIn,
  isAuthenticated,
  checkLikesDislikesBlocks,
  likeAnArticle
);

router.patch(
  "/article/dislike/:articleId/:userId",
  [check("isDisliked").isBoolean().withMessage("isLiked should be boolean")],
  isSignedIn,
  isAuthenticated,
  checkLikesDislikesBlocks,
  disLikeAnArticle
);

module.exports = router;
