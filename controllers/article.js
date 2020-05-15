const { validationResult } = require("express-validator");
const Article = require("../models/article");

// middleware to fill the article
exports.getArticleById = (req, res, next, articleId) => {
  Article.findById(articleId)
    .populate("categoryId", "_id categoryName")
    .populate("authorId", "_id firstName")
    .populate("likedBy", "_id firstName")
    .exec((err, article) => {
      if (err) {
        return res.status(400).json({
          error: "Article not found in DB",
        });
      }

      req.article = article;
    });

  next();
};

// middleware to check whether the user liked or disliked or blocked the article
exports.checkLikesDislikesBlocks = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ error: errors.array()[0].msg, param: errors.array()[0].param });
  }
  const { likedBy, dislikedBy, blockedBy } = req.article;
  const userId = req.profile._id;
  // check if the user in liked people list
  req.isLiked = likedBy.includes(userId) ? true : false;
  req.isDisliked = dislikedBy.includes(userId) ? true : false;
  req.isBlocked = blockedBy.includes(userId) ? true : false;

  next();
};

// middleware to check whether the author is original author
exports.isOriginalAuthor = (req, res, next) => {
  const article = req.article;
  const user = req.profile;

  if (user.id == article.authorId) {
    req.article.isAuthor = true;
    next();
  } else {
    return res.status(401).json({
      error: "Cannot delete or modify an article written by some other author",
    });
  }
};

// middleware to check whether the author has category preferences
exports.checkCategoryPref = (req, res, next) => {
  const { categoryPreferences } = req.profile;

  if (categoryPreferences.length <= 0) {
    return res
      .status(400)
      .json({ error: "Please select the categories to view the articles" });
  }

  next();
};

// create an article
exports.createAnArticle = (req, res) => {
  const articleVar = extractArticleDetails(req.body);

  const article = new Article(articleVar);
  article.save((err, article) => {
    if (err) {
      return res.status(400).json({
        message: err.message,
      });
    }

    return res.json(article);
  });
};

// delete an article authorId = userId
exports.deleteAnArticle = (req, res) => {
  const article = req.article;
  const user = req.profile;

  article.remove((err, article) => {
    if (err) {
      return res.status(400).json({ error: "Unable to delete an article" });
    }

    return res.json({
      message: `${article.articleName} successfully deleted`,
    });
  });
};

// edit an article
exports.editAnArticle = (req, res) => {
  let updatedArticle = extractArticleDetails(req.body);

  Article.findByIdAndUpdate(
    { _id: req.article._id },
    { $set: updatedArticle },
    { new: true, useFindAndModify: false },
    (err, article) => {
      if (err) {
        return res.status(400).json({ error: "Failed to edit the article" });
      }

      return res.json(article);
    }
  );
};

// get an article
exports.getAnArticle = (req, res) => {
  // const {}
  const article = req.article;
  const finalArticle = checkTheReaction(req.profile.id, article);
  return res.json(finalArticle);
};

// get all articles
exports.getAllArticles = (req, res) => {
  Article.find().exec((err, articles) => {
    if (err) {
      return res.status(400).json({ error: "No articles found in DB" });
    }

    const finalArticles = articles.map((article) =>
      checkTheReaction(req.profile.id, article)
    );
    return res.json(finalArticles);
  });
};

// like an article
exports.likeAnArticle = (req, res) => {
  const article = req.article;
  let { likedBy, dislikedBy } = article;
  const status = req.body.isLiked;
  const userId = req.profile.id;
  console.log(req.isLiked, req.isDisliked);

  // user liked && not previously liked && not previously disliked -> add it to the articles liked list -> liking
  if (status == true && !req.isLiked) {
    if (req.isDisliked) {
      dislikedBy = dislikedBy.filter((id) => id != userId);
    }
    likedBy.push(userId);
  } else if (!status || req.isLiked) {
    likedBy = likedBy.filter((id) => id != userId);
  }

  article.likedBy = likedBy;
  article.dislikedBy = dislikedBy;
  article.save((err, article) => {
    if (err) {
      return res.status(400).json({ error: "Failed to save" });
    }

    return res.json({ article });
  });
};

// dislike an article
exports.disLikeAnArticle = (req, res) => {
  const article = req.article;
  const profile = req.profile;
  let { likedBy, dislikedBy } = article;
  const status = req.body.isDisliked;
  const userId = profile.id;

  if (status == true && !req.isDisliked) {
    if (req.isLiked) {
      likedBy = likedBy.filter((id) => id != userId);
    }
    dislikedBy.push(userId);
  } else if (!status || req.isDisliked) {
    dislikedBy = dislikedBy.filter((id) => id != userId);
  }

  article.likedBy = likedBy;
  article.dislikedBy = dislikedBy;
  article.save((err, article) => {
    if (err) {
      return res.status(400).json({ error: "Failed to save" });
    }

    return res.json({ article });
  });
};

// get all article according to user category preferences
exports.getUsersFeed = (req, res) => {
  // Article
};

// block an article

// get all articles by particular category

// get all articles authored by particular author

// util to extract the article details for new article
const extractArticleDetails = (body) => {
  const { articleName, articleBody, authorId, categoryId } = body;
  const article = { articleName, articleBody, authorId, categoryId };
  return article;
};

// util to check whether user liked, disliked or blocked the article
const checkTheReaction = (userId, article) => {
  const {
    _id,
    articleName,
    articleBody,
    authorId,
    categoryId,
    likedBy,
    dislikedBy,
    blockedBy,
    createdAt,
    updatedAt,
  } = article;
  const finalArticle = {
    _id,
    articleName,
    articleBody,
    authorId,
    categoryId,
    likedBy,
    dislikedBy,
    blockedBy,
    createdAt,
    updatedAt,
  };

  finalArticle.isLiked = likedBy.includes(userId) ? true : false;
  finalArticle.isDisliked = dislikedBy.includes(userId) ? true : false;
  finalArticle.isBlocked = blockedBy.includes(userId) ? true : false;
  finalArticle.totalLikes = likedBy.length;
  finalArticle.totalDislikes = dislikedBy.length;
  return finalArticle;
};
