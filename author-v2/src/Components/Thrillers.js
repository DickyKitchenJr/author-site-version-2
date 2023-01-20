import React from "react";
import "./Thrillers.css";
import Header from "./Header";
import Nav from "./Nav";
import Copyright from "./Copyright";

function Thrillers() {
  return (
    <>
      {/* TODO: create write-ups for book blurbs and reviews, possibly use the ones from the previous site? Possibly use a click through option for the reviews to save on screen space? */}
      <Header />
      <Nav />
      <h2>Thrillers</h2>
      <p>include thriller books, pictures, snippets, reviews, and links</p>
      <Copyright />
    </>
  );
}

export default Thrillers;
