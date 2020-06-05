import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";

import { articleLikeReq, articleDislikeReq } from "../../redux/actions/article";

function ArticleItem(props) {
  const {
    _id,
    articleName,
    categoryId,
    authorId,
    totalLikes,
    totalDislikes,
    createdAt,
  } = props.article;

  const date = moment(createdAt).fromNow();

  const onLikeHandle = () => { 
    props.articleLikeReq(_id);
  };

  const onDislikeHandle = () => { 
    props.articleDislikeReq(_id);
  };

  return (
    <li class='article-item'>
      <div class='article-item-first-row'>
        <Link class='article-item-heading' to={`/article/view/${_id}`}>
          {articleName}
        </Link>
      </div>
      <div class='article-item-second-row'>
        <span>
          <Link
            to={`/category/${categoryId._id}`}
            class='article-item-category'>
            c/{categoryId.categoryName}
          </Link>
        </span>
        <span class='article-item-meta'>
          <span> Posted by</span>
          <span>
            <Link to={`/author/${authorId._id}`} class='article-item-author'>
              {authorId.firstName}
            </Link>
          </span>
          <span>{date}</span>
        </span>
      </div>
      <div class='article-third-row'>
        <span class='article-item-cta'>
          <button onClick={() => onLikeHandle()}>
            <i class='fas fa-thumbs-up like'></i>
          </button>
          <span>{totalLikes}</span>
        </span>
        <span class='article-item-cta'>
          <button onClick={() => onDislikeHandle()}>
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
    </li>
  );
}

export default connect(null, { articleLikeReq, articleDislikeReq })(
  ArticleItem
);
