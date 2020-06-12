import React, { useState } from "react";

function Checkbox({
  _id,
  categoryName,
  onChange,
  categories,
  isChecked = false,
}) {
  const [checked, setChecked] = useState(!isChecked);
  const isCheckedFunc = (e) => {
    let result = [];
    const valueCheckItem = e.target.value.trim();
    setChecked(!checked);
    if (e.target.checked === true) {
      result = [valueCheckItem, ...categories];
    } else {
      result = categories.filter((item) => item !== valueCheckItem);
    }
    onChange(result);
  };

  return (
    <div className='checkbox'>
      <input
        type='checkbox'
        value={_id}
        checked={checked}
        name={categoryName}
        onChange={isCheckedFunc}
      />

      <label className='category-btn'>{categoryName}</label>
    </div>
  );
}

export default Checkbox;
