import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LoadingSpinner from "../common/LoadingSpinner";
import { getAnArticle } from "../../redux/actions/article";

function ArticleFull({ match, getAnArticle, article }) {
  const articleId = match.params.articleId;
  useEffect(() => {
    getAnArticle(articleId);
  }, [articleId]);

  if (article) {
    const {
      _id,
      articleName,
      articleBody,
      categoryId,
      authorId,
      totalLikes,
      totalDislikes,
      createdAt,
    } = article;
    return (
      <div class='article-item'>
        <div class='article-item-second-row'>
          <span>
            <Link
              to={`/category/${categoryId._id}`}
              class='article-item-category'>
              c/{categoryId.categoryName}
            </Link>
          </span>
          <span class='article-item-meta'>
            <span>Posted by </span>
            <span>
              <Link to={`/author/${authorId._id}`} class='article-item-author'>
                {authorId.firstName}
              </Link>
            </span>
            <span> 2 hours ago</span>
          </span>
        </div>
        <div class='article-item-first-row'>
          <Link class='article-item-heading' to={`/article/view/${_id}`}>
            {articleName}
          </Link>
        </div>
        <div class='article-item__body'>{articleBody}</div>

        <div class='article-third-row'>
          <span class='article-item-cta'>
            <button>
              <i class='fas fa-thumbs-up like'></i>
            </button>
            <span>{totalLikes}</span>
          </span>
          <span class='article-item-cta'>
            <button>
              <i class='fas fa-thumbs-down dislike'></i>
            </button>
            <span>{totalDislikes}</span>
          </span>
          <span class='article-item-cta'>
            <button>
              <i class='fas fa-ban block'></i>
            </button>
          </span>
        </div>
      </div>
    );
  } else {
    return <LoadingSpinner />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    article: state.articles.article,
  };
};

export default connect(mapStateToProps, { getAnArticle })(ArticleFull);
