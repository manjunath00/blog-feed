import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { loginStart } from "../../../redux/actions/login";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    const body = {
      email: email,
      password: password,
    };
    props.loginStart(body);
  };

  return (
    <div class="form-container">
      <form class="form" onSubmit={onSubmit}>
        <div class="form__group">
          <label class="form__label">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            class="form__input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="form__group">
          <label class="form__label">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            class="form__input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div class="form__group">
          {/* <Link to="/articlefeed"> */}
          <button
            class="btn form__button btn-primary"
            // onSubmit={(e) => onSubmit(e)}
          >
            Sign In
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}

export default connect(null, { loginStart })(Login);
