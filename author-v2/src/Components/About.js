import React, { useState, useEffect } from "react";
import "./About.css";
import { Twirl as Hamburger } from "hamburger-react";
import Nav from "./Nav";
import TypingAuthor from "../Images/author-typing.webp";

function About() {
  const [isOpen, setOpen] = useState(false);
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
      <div style={{ minHeight: minHeight }}>
        <div className="nav-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? <Nav /> : null}
        </div>

        <main className="about-main">
          <div className="about-header">
            <img
              className="typing-author"
              src={TypingAuthor}
              alt="Dicky Kitchen Jr typing on his laptop"
            />
            <h2 className="about-h2">Meet The Author</h2>
          </div>

          <p className="about-p">
            Author Dicky Kitchen Jr answers the all-important question:
          </p>
          <br />
          <p className="about-p">
            <span className="about-span">
              "What happens when you name your child after a body part and a
              room in the house?"
            </span>
          </p>
          <br />
          <p className="about-p">
            The answer:
            <br />
            <span className="about-span">
              He creates his own serial killer, breaks the rules of writing by
              creating a story with both third and first person storytelling
              (all while not giving names to any significant character), and
              creates an ending that has left readers gasping and in awe!...
            </span>
          </p>
          <br />
          <p className="about-p">
            <span className="about-span">
              Then he makes a cute children's book just to balance things out.
            </span>
          </p>
          <br />
          <p className="about-p">
            Bringing his unique personality and life experiences to his
            writings, Dicky Kitchen Jr was a top 10 finalist in{" "}
            <a
              href="https://www.instagram.com/p/CH1eG0BA2_i/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
            >
              Balancing Books and Bottles “2020 New Author”{" "}
            </a>
            contest, and has also been a guest on the{" "}
            <a
              href="https://fableandtheverbivore.com/podcast/episode-132-interview-with-dicky-kitchen-jr"
              target="_blank"
              rel="noreferrer"
            >
              Fable and The Verbivore Podcast
            </a>{" "}
            as well as being a featured author on{" "}
            <a
              href="https://www.jessicacantwellbooks.com/post/prey-pray-by-dicky-kitchen-jr"
              target="_blank"
              rel="noreferrer"
            >
              Jessica Cantwell’s
            </a>{" "}
            site.
          </p>
          <br />
          <p className="about-p">
            When he’s not using his free time to create amazing new and original
            tales, you can find Dicky talking with other writers about their
            craft, spending time with his wonderful wife and child, or enjoying
            nature.
          </p>
          <br />
        </main>
      </div>
    </>
  );
}

export default About;
