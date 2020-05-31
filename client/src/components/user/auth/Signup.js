import React from "react";

function Signup() {
  return (
    <div class="form-container">
      <form action="./01-Feed.html" class="flex form">
        <div class="signup-block">
          <div class="col-2">
            <div class="form__group">
              <label class="form__label">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                class="form__input"
                required
              />
            </div>
            <div class="form__group">
              <label class="form__label">Last Name</label>
              <input type="text" placeholder="Last Name" class="form__input" />
            </div>
          </div>
          <div class="form__group">
            <label class="form__label">Email</label>
            <input type="email" placeholder="Email" class="form__input" />
          </div>

          <div class="form__group">
            <label class="form__label">Phone</label>
            <input type="number" placeholder="Phone" class="form__input" />
          </div>

          <div class="col-2">
            <div class="form__group">
              <label class="form__label">Password</label>
              <input
                type="password"
                placeholder="password"
                class="form__input"
              />
            </div>
            <div class="form__group">
              <label class="form__label">Confirm Password</label>
              <input
                type="password"
                placeholder="confirm password"
                class="form__input"
              />
            </div>
          </div>
          <div class="form__group">
            <label class="form__label">Date Of Birth</label>
            <input
              type="date"
              placeholder="date of birth"
              class="form__input"
            />
          </div>
        </div>
        <div class="signup-block">
          <div class="form__group">
            <label for="" class="form__label">
              Select Categories
            </label>
            <div class="category-list">
              <label class="category-btn selected-category">Technology</label>
              <label class="category-btn">Science</label>
              <label class="category-btn">Geopolitics</label>
              <label class="category-btn">Geopolitics</label>
              <label class="category-btn">Geopolitics</label>
              <label class="category-btn">Geopolitics</label>
            </div>
          </div>

          <div class="form__group">
            <button class="btn form__button btn-primary" type="submit">
              sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
