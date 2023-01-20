import React from 'react';
import './BlogSection.css';
import Header from "./Header";
import Nav from './Nav';
import Copyright from "./Copyright";

function BlogSection() {
  return (
    <>
    {/* TODO: Create addition files holding blogs; create links for individual blogs, look into building a comments section */}
      <Header />
      <Nav />
      <h2>Blogs (Welcome to My Mind /The Unusually Named Writer)</h2>
      <p>nav section leading to blogs, maybe a visual. Include comment section in the blogs?</p>
      <Copyright />
    </>
  )
}

export default BlogSection
