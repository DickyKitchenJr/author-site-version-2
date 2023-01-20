import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className='main-nav'>
      <Link className="nav-link" to="/">
        HOME
      </Link>
      <Link className="nav-link" to="/about">
        ABOUT
      </Link>
      <Link className="nav-link" to="/blogs">
        BLOG
      </Link>
      <Link className="nav-link" to="/thrillers">
        THRILLERS
      </Link>
      <Link className="nav-link" to="/kidfriendly">
        KID FRIENDLY
      </Link>
    </nav>
  );
}

export default Nav
