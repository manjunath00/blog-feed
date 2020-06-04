import React, { useState } from "react";
import { connect } from "react-redux";

import { loginStart } from "../../../redux/actions/auth";
import { Field } from "../../common";

function Login({ loginStart }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    loginStart(body);
  };

  return (
    <div class='form-container'>
      <form class='form' onSubmit={onSubmit}>
        <Field
          label='Email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={setEmail}
        />
        <Field
          label='Password'
          type='password'
          placeholder='password'
          value={password}
          onChange={setPassword}
        />

        <div class='form__group'>
          <button class='btn form__button btn-primary'>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default connect(null, { loginStart })(Login);
