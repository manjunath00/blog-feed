import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <li class='category-item'>
      <Link
        to={`/category/${category._id}`}
        class='category-link'
        activeClassName='active-category-item'>
        {category.categoryName}
      </Link>
    </li>
  );
}

export default CategoryItem;
