import React from 'react';
import './Nav.css';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="main-nav">
      <NavLink className="nav-link" to="/">
        HOME
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        to="/about"
      >
        ABOUT
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        to="/blogs"
      >
        BLOG
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        to="/thrillers"
      >
        THRILLERS
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        to="/kidfriendly"
      >
        KID FRIENDLY
      </NavLink>
    </nav>
  );
}

export default Nav
