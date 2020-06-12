import React from "react";

import { Checkbox } from "../../../common";

function Categories({ categories }) {
  const onHandleChange = (e) => {
    console.log("changing");
  };

  return (
    <div class='settings__item-component' id='password'>
      <label for='' class='settings__item-component-label'>
        Update Categories
      </label>
      <form>
        <div className='d-flex'>
          {categories.map((item) => (
            <Checkbox
              {...item}
              categories={categories}
              onChange={onHandleChange}
            />
          ))}
        </div>
        <div class='settings__item-component-cta'>
          <button class='btn btn-primary' type='submit'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Categories;

Categories.defaultProps = {
  categories: [
    { _id: 1, categoryName: "Technology", isChecked: true },
    { _id: 2, categoryName: "Space", isChecked: true },
    { _id: 3, categoryName: "Geopolitics", isChecked: false },
  ],
};
