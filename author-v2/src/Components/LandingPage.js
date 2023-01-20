import React from "react";
import "./LandingPage.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Header from "./Header";
import Copyright from "./Copyright";
import OpenBook from "../Images/open-book-angled.jpg";
import BWAuthor from "../Images/author-no-background.png";

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
          </nav>
          <img
            className="bw-author"
            src={BWAuthor}
            alt="black and white of the author"
          />
        </main>

        <Copyright />
      </Parallax>
    </>
  );
}

export default LandingPage;
