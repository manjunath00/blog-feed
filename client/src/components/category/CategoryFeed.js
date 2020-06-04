import React, { useEffect } from "react";
import { connect } from "react-redux";

import { XFeed } from "../article";
import { reqArticlesByCategory } from "../../redux/actions/article";
import { LoadingSpinner } from "../common";

function CategoryFeed({ match, articles, reqArticlesByCategory }) {
  const categoryId = match.params.categoryId;
  useEffect(() => {
    reqArticlesByCategory(categoryId);
  }, []);
  return <>{articles ? <XFeed articles={articles} /> : <LoadingSpinner />}</>;
}

const mapStateToProps = (state) => {
  return { articles: state.articles.articlesByCategory || [] };
};

export default connect(mapStateToProps, { reqArticlesByCategory })(
  CategoryFeed
);
