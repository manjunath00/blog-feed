import React from "react";

function CategoryItem({ value, categoryId }) {
  return (
    <option value={categoryId} class='post-container__category__option'>
      {value}
    </option>
  );
}

function CategoryOptions({ categories, setCategory, category }) {
  const onCategorySelect = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div class='post-container__category'>
      <select
        name='Choose a category'
        required
        onChange={onCategorySelect}
        value={category}>
        <option value='' class='post-container__category__option'>
          Choose a category
        </option>
        {categories.map((item) => (
          <CategoryItem
            value={item.categoryName}
            categoryId={item._id}
            key={item._id}
          />
        ))}
      </select>
    </div>
  );
}

export default CategoryOptions;
