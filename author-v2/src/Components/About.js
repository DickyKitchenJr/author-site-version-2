import React, { useState } from "react";
import "./About.css";
import { Twirl as Hamburger } from "hamburger-react";
import Header from "./Header";
import Nav from "./Nav";
import Copyright from "./Copyright";
import TypingAuthor from "../Images/author-typing.webp";

function About() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Finish writing bio and possibly include a links section for resources */}
      <Header />

      <div className="nav-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen ? <Nav /> : null}
      </div>

      <main className="about-main">
        <div className="about-header">
          <h2 className="about-h2">
            Meet
            <br />
            The
            <br />
            Author
          </h2>
          <img
            className="typing-author"
            src={TypingAuthor}
            alt="Dicky Kitchen Jr typing on his laptop"
          />
        </div>

        <p className="about-p">
          Dicky Kitchen Jr, author, creator of{" "}
          <a
            href="https://discord.gg/K9VtKNKqsB"
            target="_blank"
            rel="noreferrer"
          >
            BookInd
          </a>{" "}
          answers the all important question:
          <br />
          "What happens when you name your child after a body part and a room in
          the house?""
          <br />
          <br />
          The answer:
          <br />
          He creates his own serial killer, breaks the rules of writing by
          creating a story with both third and first person storytelling (all
          while not giving names to any significant character), and creates an
          ending that has left readers gasping and in awe! That's what.
          <br />
          <br />
          Dicky Kitchen Jr brings his unique personality and life experiences to
          his writings (probably shouldn't say that after the whole "creates his
          own serial killer" thing), resulting in stories unlike any seen
          before.
        </p>
      </main>

      <Copyright />
    </>
  );
}

export default About;
