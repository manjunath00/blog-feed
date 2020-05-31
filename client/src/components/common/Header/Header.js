import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header({ isAuthenticated, userName }) {
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
            <span class='nav-link__text'>log out</span>
          </Link>
        </li>
      </ul>
    );
  }

  function notAuthenticated() {
    return (
      <ul>
        <li>
          <Link class='nav-link n-link-active' to='/'>
            <i class='fas fa-user hide-mobile'></i>
            <span class='nav-link__text'>Log In</span>
          </Link>
        </li>
        <li>
          <Link class='nav-link' to='/signup'>
            <span class='nav-link__text'>Sign Up</span>
          </Link>
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

export default connect(mapStateToProps, null)(Header);
