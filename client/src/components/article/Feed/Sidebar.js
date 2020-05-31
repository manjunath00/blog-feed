import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import CategoryItem from "../../category/CategoryItem";
import { reqUserCategories } from "../../../redux/actions/category";

function Sidebar({ reqUserCategories, categories }) {
  useEffect(() => {
    reqUserCategories();
  }, []);

  return (
    <div class='side-bar'>
      <ul class='categories-menu'>
        <li class='create-post'>
          <Link to='/article/new'>create post</Link>
        </li>
        <li class='category-heading'>categories</li>
        <li class='category-item '>
          <NavLink
            to='/'
            class='category-link'
            activeClassName='active-category-item'>
            all
          </NavLink>
        </li>
        {categories &&
          categories.map((category) => (
            <CategoryItem category={category} key={category._id} />
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { categories: state.category.categoryPreferences };
};

export default connect(mapStateToProps, { reqUserCategories })(Sidebar);
