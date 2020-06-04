import React, { useEffect } from "react";
import { connect } from "react-redux";

import { XFeed } from "../article";
import { reqArticleByAuthor } from "../../redux/actions/article";
import { LoadingSpinner } from "../common";

function AuthorFeed({ match, articles, reqArticleByAuthor }) {
  const authorId = match.params.authorId; 
  useEffect(() => {
    reqArticleByAuthor(authorId);
  }, []);
  return <>{articles ? <XFeed articles={articles} /> : <LoadingSpinner />}</>;
}

const mapStateToProps = (state) => {
  return { articles: state.articles.articlesByAuthor || [] };
};

export default connect(mapStateToProps, { reqArticleByAuthor })(AuthorFeed);
