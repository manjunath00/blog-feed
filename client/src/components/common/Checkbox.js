import React from "react";

function Checkbox({ _id, categoryName, onChange, categories }) {
  const isCheckedFunc = (e) => {
    let result = [];
    const valueCheckItem = e.target.value.trim();
    if (e.target.checked === true) {
      result = [valueCheckItem, ...categories];
    } else {
      result = categories.filter((item) => item !== valueCheckItem);
    }
    onChange(result);
  };

  return (
    <div>
      <input
        type='checkbox'
        value={_id}
        name={categoryName}
        onChange={isCheckedFunc}
      />

      <label className='category-btn'>{categoryName}</label>
    </div>
  );
}

export default Checkbox;
