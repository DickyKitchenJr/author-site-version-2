import React from "react";
import "./LandingPage.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import OpenBook from "../Images/open-book-angled.webp";
import BWAuthor from "../Images/author-no-background.webp";

function LandingPage() {
  return (
    <>
      <Parallax
        blur={3}
        bgImage={OpenBook}
        bgImageAlt="opened book"
        strength={500}
      >
        <main className="landing-main">
          <img
            className="bw-author"
            src={BWAuthor}
            alt="black and white of the author"
          />
          <nav className="landing-nav">
            <Link className="landing-link" to="/about">
              ABOUT
            </Link>
            <Link className="landing-link" to="/blogs">
              BLOG
            </Link>
            <Link className="landing-link" to="/thrillers">
              THRILLERS
            </Link>
            <Link className="landing-link" to="/kidfriendly">
              KID FRIENDLY
            </Link>
            {/* <Link className="landing-link" to="/bookind">
              BOOKIND
            </Link> */}
          </nav>
        </main>
      </Parallax>
    </>
  );
}

export default LandingPage;
