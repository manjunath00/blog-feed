import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ArticleItem from "../ArticleItem";
import { articlesReq } from "../../../redux/actions/article";

function Mainbar({ articles, articlesReq }) {
  console.log(articles);
  useEffect(() => {
    articlesReq();
  }, []);

  const feed = articles.length > 0 ? articles : [];
  return (
    <div class='main-bar'>
      <ul class='articles-list'>
        {feed &&
          feed.map((article) => (
            <ArticleItem article={article} key={article._id} />
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { articles: state.articles.all };
};

export default withRouter(connect(mapStateToProps, { articlesReq })(Mainbar));
