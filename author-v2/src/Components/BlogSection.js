import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./BlogSection.css";
import { Twirl as Hamburger } from "hamburger-react";
import Header from "./Header";
import Nav from "./Nav";
import Copyright from "./Copyright";
import BlogHome from "../Blogs/BlogHome";
import Pantser from "../Blogs/Pantser";
import TheReview from "../Blogs/TheReview";

function BlogSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Create addition files holding blogs; create links for individual blogs, look into building a comments section */}
      <Header />
      <div className="blog-section">
        <div className="nav-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? <Nav /> : null}
        </div>
        <Routes>
          <Route index element={<BlogHome />} /> 
          <Route path="pantser" element={<Pantser />} />
          <Route path="all-powerful-review" element={<TheReview />} />
        </Routes>
      </div>
      <Copyright />
    </>
  );
}

export default BlogSection;
