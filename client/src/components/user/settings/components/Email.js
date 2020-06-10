import React, { useState } from "react";

import { Field } from "../../../common";

function Email({ email }) {
  const [oldEmail, setOldEmail] = useState(email);
  const [newEmail, setNewEmail] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: newEmail,
    };
    console.log(body);
  };

  return (
    <div class='settings__item-component' id='email'>
      <label for='' class='settings__item-component-label'>
        Change email
      </label>
      <form class='form' onSubmit={onHandleSubmit}>
        <Field
          type='email'
          placeholder=''
          label='old Email'
          value={oldEmail}
          onChange={setOldEmail}
        />

        <Field
          type='email'
          placeholder='email'
          label='New email'
          value={newEmail}
          onChange={setNewEmail}
        />

        <div class='settings__item-component-cta'>
          <button class='btn btn-primary' type='submit'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Email;
