import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="header-container">
      <header class="header">
        <ul>
          <li>
            <Link to="/" class="nav-link__heading" href="#">
              buzz-feed
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link class="nav-link n-link-active" to="/user/dashboard">
              <i class="fas fa-user hide-mobile"></i>
              <span class="nav-link__text">Username</span>
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/user/settings">
              <i class="fas fa-cog hide-mobile"></i>
              <span class="nav-link__text">settings</span>
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/">
              <i class="fas fa-power-off hide-mobile"></i>
              <span class="nav-link__text">log out</span>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
