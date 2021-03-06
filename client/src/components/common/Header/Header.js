import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signoutStart } from "../../../redux/actions/auth";

function Header({ isAuthenticated, userName, signoutStart }) {
  const onSignOut = () => {
    signoutStart();
  };

  function onAuthenticated(username) {
    return (
      <ul>
        <li>
          <NavLink
            activeClassName='n-link-active'
            class='nav-link'
            to='/user/dashboard'>
            <i class='fas fa-user hide-mobile'></i>
            <span class='nav-link__text'>{username}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='n-link-active'
            class='nav-link'
            to='/user/settings'>
            <i class='fas fa-cog hide-mobile'></i>
            <span class='nav-link__text'>settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='n-link-active' class='nav-link' to='/'>
            <i class='fas fa-power-off hide-mobile'></i>
            <span class='nav-link__text' onClick={onSignOut}>
              log out
            </span>
          </NavLink>
        </li>
      </ul>
    );
  }

  function notAuthenticated() {
    return (
      <ul>
        <li>
          <NavLink class='nav-link' to='/' activeClassName='n-link-active'>
            <i class='fas fa-user hide-mobile'></i>
            <span class='nav-link__text'>Log In</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            class='nav-link'
            to='/signup'
            activeClassName='n-link-active'>
            <span class='nav-link__text'>Sign Up</span>
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <div class='header-container'>
      <header class='header'>
        <ul>
          <li>
            <NavLink to='/' class='nav-link__heading' href='#'>
              buzz-feed
            </NavLink>
          </li>
        </ul>
        {isAuthenticated ? onAuthenticated(userName) : notAuthenticated()}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userName: state.auth.name,
  };
};

export default connect(mapStateToProps, { signoutStart })(Header);
