import React from "react";

function DashboardArticle() {
  return (
    <li class="article-item">
      <div class="article-item-first-row">
        <a class="article-item-heading" href="#">
          Hello There how are you
        </a>
      </div>
      <div class="article-item-second-row">
        <span>
          <a href="#" class="article-item-category">
            c/science
          </a>
        </span>
        <span class="article-item-meta">
          <span>Posted by </span>
          <span>
            <a href="#" class="article-item-author">
              john
            </a>
          </span>
          <span> 2 hours ago</span>
        </span>
      </div>
      <div class="article-third-row">
        <span class="article-item-cta">
          <button>
            <i class="fas fa-thumbs-up like"></i>
          </button>
          <span>88</span>
        </span>
        <span class="article-item-cta">
          <button>
            <i class="fas fa-thumbs-down dislike"></i>
          </button>
          <span>45</span>
        </span>
        <span class="article-item-cta">
          <button>
            <i class="fas fa-ban block"></i>
          </button>
        </span>
      </div>
    </li>
  );
}

export default DashboardArticle;
