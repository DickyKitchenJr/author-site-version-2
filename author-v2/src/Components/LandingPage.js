import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import OpenBook from "../Images/open-book-angled.webp";
import BWAuthor from "../Images/author-no-background.webp";

function LandingPage() {
  const [minHeight, setMinHeight] = useState("85vh");

  // was having difficulty getting main to take up a minimum of full screen height (with header and footer), so used this to make sure it always takes up at least the screen height dynamically
  const updateMinHeight = () => {
    if (window.innerWidth >= 1000) {
      const newMinHeight = window.innerHeight * 0.8918;
      setMinHeight(`${newMinHeight}px`);
    } else {
      const newMinHeight = window.innerHeight * 0.857;
      setMinHeight(`${newMinHeight}px`);
    }
  };

  useEffect(() => {
    updateMinHeight();

    window.addEventListener("resize", updateMinHeight);

    return () => {
      window.removeEventListener("resize", updateMinHeight);
    };
  }, []);

  return (
    <>
      <Parallax
        blur={3}
        bgImage={OpenBook}
        bgImageAlt="opened book"
        strength={500}
      >
        <main className="landing-main" style={{ minHeight: minHeight }}>
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
          </nav>
        </main>
      </Parallax>
    </>
  );
}

export default LandingPage;
