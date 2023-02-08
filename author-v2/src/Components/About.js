import React, { useState } from "react";
import "./About.css";
import { Twirl as Hamburger } from "hamburger-react";
import Nav from "./Nav";
import TypingAuthor from "../Images/author-typing.webp";

function About() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Finish writing bio and possibly include a links section for resources */}
      <div className="about">
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
            Author, creator of the writing discord server{" "}
            <a
              href="https://discord.gg/K9VtKNKqsB"
              target="_blank"
              rel="noreferrer"
            >
              BookInd
            </a>
            , and friend to the writing community; Dicky Kitchen Jr answers the
            all-important question:
            <br />
            <span className="about-span">
              "What happens when you name your child after a body part and a
              room in the house?"
            </span>
            <br />
            <br />
            The answer:
            <br />
            <span className="about-span">
              He creates his own serial killer, breaks the rules of writing by
              creating a story with both third and first person storytelling
              (all while not giving names to any significant character), and
              creates an ending that has left readers gasping and in awe!...
              <br />
              Then he makes a cute children's book just to balance things out.
            </span>
            <br />
            <br />
            Dicky Kitchen Jr brings his unique personality and life experiences
            to his writings (probably shouldn't say that after the whole
            "creates his own serial killer" thing), resulting in stories unlike
            any seen before.
          </p>

          <div className="about-footer">
            <p className="about-p">
              Interviews of Dicky Kitchen Jr can be found here:
            </p>
            <ul className="about-ul">
              <li><a
              href="https://www.jessicacantwellbooks.com/post/prey-pray-by-dicky-kitchen-jr"
              target="_blank"
              rel="noreferrer"
            >
              Jessica Cantwell Books
            </a></li>
            <li>
              <a
              href="https://fableandtheverbivore.com/podcast/episode-132-interview-with-dicky-kitchen-jr"
              target="_blank"
              rel="noreferrer"
            >Fable & The Verbivore Podcast</a>
            </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default About;
