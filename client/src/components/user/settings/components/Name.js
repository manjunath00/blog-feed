import React, { useState } from "react";

import { Field } from "../../../common";

function Name({ fName, lName, DOB }) {
  const [firstName, setFirstName] = useState(fName);
  const [lastName, setLastName] = useState(lName);
  const [dob, setDob] = useState(DOB);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const body = {
      firstName,
      lastName,
    };
    console.log(body);
  };

  return (
    <div class='settings__item-component' id='name'>
      <label for='' class='settings__item-component-label'>
        Name Date of Birth
      </label>
      <div class='settings__user-details'>
        <form class='form' onSubmit={onHandleSubmit}>
          <div class='col-2'>
            <Field
              type='text'
              placeholder='First Name'
              label='First Name'
              value={firstName}
              onChange={setFirstName}
            />
            <Field
              type='text'
              placeholder='Last Name'
              label='Last Name'
              value={lastName}
              onChange={setLastName}
            />
          </div>
          <Field
            type='date'
            placeholder='date of birth'
            label='Date Of Birth'
            value={dob}
            onChange={setDob}
          />

          <div class='settings__item-component-cta'>
            <button class='btn btn-primary' type='submit'>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Name;
