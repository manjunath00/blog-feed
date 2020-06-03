import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'

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
    </li>
  );
}

export default ArticleItem;

/* 
     {
        "_id": "5ebfcbda9992e0314c12bae3",
        "articleName": "Hackers target supercomputers researching Covid-19 in Switzerland, Germany, UK",
        "articleBody": "Agencies investigating the hacking say potential theft of information could jeopardise the delivery of secure, effective, and efficient treatment options.",
        "authorId": {
            "_id": "5eb45be59d6abe3c18775609",
            "firstName": "John"
        },
        "categoryId": {
            "_id": "5eb4776faa07a80db421ec7a",
            "categoryName": "Technology"
        },
        "likedBy": [],
        "dislikedBy": [],
        "blockedBy": [],
        "createdAt": "2020-05-16T11:17:46.046Z",
        "updatedAt": "2020-05-16T11:17:46.046Z",
        "isLiked": false,
        "isDisliked": false,
        "isBlocked": false,
        "totalLikes": 0,
        "totalDislikes": 0
    }

*/
