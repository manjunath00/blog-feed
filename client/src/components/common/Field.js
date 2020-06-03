import React from "react";

function Field({ type, placeholder, label, value, onChange }) {
  return (
    <div class='form__group'>
      <label class='form__label'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        class='form__input'
        required
      />
    </div>
  );
}

export default Field;
