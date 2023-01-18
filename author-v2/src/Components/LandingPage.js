import React from "react";
import "./LandingPage.css";
import { Parallax } from "react-parallax";
import Header from "./Header";
import Copyright from "./Copyright";
import OpenBook from "../Images/open-book-angled.jpg";
import BWAuthor from '../Images/author-no-background.png';

function LandingPage() {
  return (
    <>
      {/* TODO: add friendly author pic and navigation section, possibly a short intro or hook? */}
      <Parallax
        blur={3}
        bgImage={OpenBook}
        bgImageAlt="opened book"
        strength={500}
      >
        <Header />

        <main className="landing-main">
          <nav className="landing-nav">
          <a className="landing-link" href='#'>ABOUT</a>
          <a className="landing-link" href="#">BLOG</a>
          <a className="landing-link" href="#">THRILLERS</a>
          <a className="landing-link" href="#">KID FRIENDLY</a>
        </nav>
        <img className="bw-author" src={BWAuthor} alt="black and white of the author" />
        </main>
        
        <Copyright />
      </Parallax>
    </>
  );
}

export default LandingPage;
