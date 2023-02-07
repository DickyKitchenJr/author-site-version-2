import React from 'react';
import { NavLink } from 'react-router-dom';
import './Blogs.css';
import MugShot from '../Images/mug-and-author.webp';

function BlogHome() {
  return (
    <>
      <div className="blog-home-intro">
        <img className="mugshot" src={MugShot} alt="author" />
        <h2 className="blog-h2">
          Welcome To The Mind Of The Unusually Named Writer
        </h2>
        <div className="blog-home-intro-p">
          <p className="blog-p">
            So you want to dive deeper into the unknown crevices of Dicky
            Kitchen Jr's mind?
          </p>
          <p className="blog-p">
            Be warned - We don't really know what he is going to do next.
          </p>
          <p className="blog-p">Go ahead... Pick a blog post and enjoy</p>
        </div>
      </div>
      <nav className="blog-section-nav">
        <NavLink className="blog-section-nav-link" to="pantser">
          <h3>Pantser</h3>
        </NavLink>
        <NavLink className="blog-section-nav-link" to="all-powerful-review">
          <h3>The All-Powerful Review</h3>
        </NavLink>
        <NavLink className="blog-section-nav-link" to="talking-to-myself">
          <h3>Talking to Myself</h3>
        </NavLink>
        <NavLink className="blog-section-nav-link" to="lynne-pearson">
          <h3>Interview with Lynne Pearson</h3>
        </NavLink>
        <NavLink className="blog-section-nav-link" to='the-kid'>
          <h3>The Kid - Sneak Peek</h3>
        </NavLink>
        <NavLink className="blog-section-nav-link">
          <h3>Place Holder 6</h3>
        </NavLink>
        <NavLink className="blog-section-nav-link">
          <h3>Place Holder 7</h3>
        </NavLink>
        <NavLink className="blog-section-nav-link">
          <h3>Place Holder 8</h3>
        </NavLink>
        <NavLink className="blog-section-nav-link">
          <h3>Place Holder 9</h3>
        </NavLink>
      </nav>
    </>
  );
}

export default BlogHome
