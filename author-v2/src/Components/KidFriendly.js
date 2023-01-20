import React, { useState } from 'react';
import './KidFriendly.css';
import { Twirl as Hamburger } from "hamburger-react";
import Header from './Header';
import Copyright from './Copyright';
import Nav from './Nav';

function KidFriendly() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: create write-up and review section for kids book */}
      <Header />
      <div className="nav-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen ? <Nav /> : null}
      </div>
      <h2>Kid Friendly Book</h2>
      <p>
        include The True Tale of Peter Piper with reviews, snippet, picture, and
        links to purchase
      </p>
      <Copyright />
    </>
  );
}

export default KidFriendly
