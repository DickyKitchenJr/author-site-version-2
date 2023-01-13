import React from "react";
import "./AllBooks.css";
import Header from "./Header";
import Copyright from "./Copyright";

function AllBooks() {
  return (
    <>
      {/* TODO: create write-ups for book blurbs and reviews, possibly use the ones from the previous site? Possibly use a click through option for the reviews to save on screen space? */}
      <Header />
      <h2>All Books</h2>
      <p>include all books, pictures, snippets, reviews, and links</p>
      <Copyright />
    </>
  );
}

export default AllBooks;
