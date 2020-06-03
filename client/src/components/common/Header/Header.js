import React from "react";
import { Link, NavLink } from "react-router-dom";
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
          <Link class='nav-link n-link-active' to='/user/dashboard'>
            <i class='fas fa-user hide-mobile'></i>
            <span class='nav-link__text'>{username}</span>
          </Link>
        </li>
        <li>
          <Link class='nav-link' to='/user/settings'>
            <i class='fas fa-cog hide-mobile'></i>
            <span class='nav-link__text'>settings</span>
          </Link>
        </li>
        <li>
          <Link class='nav-link' to='/'>
            <i class='fas fa-power-off hide-mobile'></i>
            <span class='nav-link__text' onClick={onSignOut}>
              log out
            </span>
          </Link>
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
            <Link to='/' class='nav-link__heading' href='#'>
              buzz-feed
            </Link>
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
