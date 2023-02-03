import React from 'react';
import { NavLink } from 'react-router-dom';
import './Blogs.css';
import MugShot from '../Images/mug-and-author.webp';
import Portal from '../Images/through-the-wall.webp';

function BlogHome() {
  return (
    <>
      <div className='blog-home-intro'>
        <img src={Portal} alt="author" />
        <h2 className="blog-h2">
          Welcome To The Mind Of The Unusually Named Writer
        </h2>
        <p className="blog-p">
          So you want to dive deeper into the unknown crevices of Dicky Kitchen
          Jr's mind?
        </p>
        <br/>
        <p className="blog-p">
          Be warned... We don't really know what he is going to do next...
        </p>
        <br/>
        <p className="blog-p">Go ahead... Pick a blog post and enjoy</p>
      </div>
      <nav>
        <NavLink to='pantser'>Pantser</NavLink>
        <NavLink>Place Holder 2</NavLink>
        <NavLink>Place Holder 3</NavLink>
        <NavLink>Place Holder 4</NavLink>
        <NavLink>Place Holder 5</NavLink>
        <NavLink>Place Holder 6</NavLink>
        <NavLink>Place Holder 7</NavLink>
        <NavLink>Place Holder 8</NavLink>
        <NavLink>Place Holder 9</NavLink>
      </nav>
    </>
  );
}

export default BlogHome
