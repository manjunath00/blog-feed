import React from "react";

function ArticleNew() {
  return (
    <div class="post-container">
      <form action="">
        <div class="post-container__heading">Create Post</div>
        <div class="post-container__category">
          <select name="Choose a category" required>
            <option value="" class="post-container__category__option">
              Choose a category
            </option>
            <option value="Technology" class="post-container__category__option">
              Technology
            </option>
            <option value="Science" class="post-container__category__option">
              Science
            </option>
            <option value="Space" class="post-container__category__option">
              Space
            </option>
            <option value="Politics" class="post-container__category__option">
              Politics
            </option>
            <option value="Health" class="post-container__category__option">
              Health
            </option>
          </select>
        </div>

        <div class="post-container__article-title">
          <textarea
            placeholder="Article Title"
            rows="1"
            required
            autofocus
          ></textarea>
        </div>

        <div class="post-container__article-body">
          <textarea
            placeholder="Article body"
            rows="15"
            id=""
            required
          ></textarea>
        </div>

        <div class="post-container__action">
          <button class="btn-primary btn" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default ArticleNew;
