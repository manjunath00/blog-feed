import React from "react";
import ArticleItem from "../ArticleItem";

function XFeed({ articles }) {
  return (
    <div className='main-bar'>
      {articles.map((item) => (
        <ArticleItem item={item} key={item._id} />
      ))}
    </div>
  );
}

export default XFeed;
