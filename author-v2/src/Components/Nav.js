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
          return isActive ? { color: "hsl(0, 83%, 47%)" } : {};
        }}
        to="/about"
      >
        ABOUT
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) => {
          return isActive ? { color: "hsl(0, 83%, 47%)" } : {};
        }}
        to="/blogs"
      >
        BLOG
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) => {
          return isActive ? { color: "hsl(0, 83%, 47%)" } : {};
        }}
        to="/thrillers"
      >
        THRILLERS
      </NavLink>
      <NavLink
        className="nav-link"
        style={({ isActive }) => {
          return isActive ? { color: "hsl(0, 83%, 47%)" } : {};
        }}
        to="/kidfriendly"
      >
        KID FRIENDLY
      </NavLink>
      {/* <NavLink
        className="nav-link"
        style={({ isActive }) => {
          return isActive ? { color: "hsl(0, 83%, 47%)" } : {};
        }}
        to="/bookind"
      >
        BOOKIND
      </NavLink> */}
    </nav>
  );
}

export default Nav
