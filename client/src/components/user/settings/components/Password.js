import React, { useState } from "react";

import { Field } from "../../../common";

function Password() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const body = {
      oldPassword,
      newPassword,
    };
    console.log(body);
  };

  return (
    <div class='settings__item-component' id='password'>
      <label for='' class='settings__item-component-label'>
        Update Password
      </label>
      <form class='form' onSubmit={onHandleSubmit}>
        <Field
          type='password'
          placeholder='Current Password'
          label='Current Password'
          value={oldPassword}
          onChange={setOldPassword}
        />
        <Field
          type='password'
          placeholder='new password'
          label='New Password'
          value={newPassword}
          onChange={setNewPassword}
        />
        <Field
          type='password'
          placeholder='confirm password'
          label='Confirm Password'
          value={confPassword}
          onChange={setConfPassword}
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

export default Password;
