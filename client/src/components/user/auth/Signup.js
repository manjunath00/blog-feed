import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Field from "../../common/Field";
import Checkbox from "../../common/Checkbox";
import LoadingSpinner from "../../common/LoadingSpinner";
import { signUpStart } from "../../../redux/actions/auth";
import { getAllCategories } from "../../../redux/actions/category";

function Signup({ signUpStart, getAllCategories, allCategories }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [dob, setDob] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      phone,
      password,
      dateOfBirth: dob,
      categoryPreferences:selectedCategories,
    };

    signUpStart(user);
  };

  return (
    <div class='form-container'>
      <form action='./01-Feed.html' class='flex form' onSubmit={onFormSubmit}>
        <div class='signup-block'>
          <div class='col-2'>
            <Field
              label='First Name'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={setFirstName}
            />
            <Field
              label='Last Name'
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={setLastName}
            />
          </div>
          <Field
            label='Email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={setEmail}
          />
          <Field
            label='Phone'
            type='number'
            placeholder='Phone'
            value={phone}
            onChange={setPhone}
          />

          <div class='col-2'>
            <Field
              label='Password'
              type='password'
              placeholder='password'
              value={password}
              onChange={setPassword}
            />
            <Field
              label='C. Password'
              type='password'
              placeholder='confirm password'
              value={confPassword}
              onChange={setConfPassword}
            />
          </div>
          <Field
            label='Date Of Birth'
            type='date'
            placeholder='date of birth'
            value={dob}
            onChange={setDob}
          />
        </div>
        <div class='signup-block'>
          <div class='form__group'>
            <label for='' class='form__label'>
              Select Categories
            </label>
            <div class='category-list'>
              <div>
                {allCategories ? (
                  allCategories.map((item) => (
                    <Checkbox
                      {...item}
                      key={item._id}
                      onChange={setSelectedCategories}
                      categories={selectedCategories}
                    />
                  ))
                ) : (
                  <LoadingSpinner />
                )}
              </div>
            </div>
          </div>

          <div class='form__group'>
            <button class='btn form__button btn-primary' type='submit'>
              sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { allCategories: state.category.all };
};
export default connect(mapStateToProps, { signUpStart, getAllCategories })(
  Signup
);
