import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import CategoryOptions from "./CategoryOptions";
import { reqUserCategories } from "../../redux/actions/category";
import { postANewArticle } from "../../redux/actions/article";
import LoadingSpinner from "../common/LoadingSpinner";

function ArticleNew(props) {
  const [category, setCategory] = useState();
  const [articleName, setArticleName] = useState("Hello World");
  const [articleBody, setArticleBody] = useState("");

  useEffect(() => {
    props.reqUserCategories();
  }, []);

  const categories = props.categories;
  const onHandleSubmit = (e) => {
    e.preventDefault();

    const article = {
      categoryId: category,
      articleName,
      articleBody,
    };
    props.postANewArticle(article);
    setCategory(null);
    setArticleName("");
    setArticleBody("");
  };

  if (categories) {
    return (
      <div class='post-container'>
        <form onSubmit={onHandleSubmit}>
          <div class='post-container__heading'>Create Post</div>
          <CategoryOptions
            categories={categories}
            setCategory={setCategory}
            selected={category}
          />

          <div class='post-container__article-title'>
            <textarea
              placeholder='Article Title'
              rows='1'
              value={articleName}
              onChange={(e) => setArticleName(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div class='post-container__article-body'>
            <textarea
              placeholder='Article body'
              rows='15'
              value={articleBody}
              onChange={(e) => setArticleBody(e.target.value)}
              required
            />
          </div>

          <div class='post-container__action'>
            <button class='btn-primary btn' type='submit'>
              Post
            </button>
            {props.newArticle ? <Redirect to='/' /> : null}
          </div>
        </form>
      </div>
    );
  } else {
    return <LoadingSpinner />;
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categoryPreferences,
    newArticle: state.articles.newArticle,
  };
};

export default connect(mapStateToProps, { reqUserCategories, postANewArticle })(
  ArticleNew
);
