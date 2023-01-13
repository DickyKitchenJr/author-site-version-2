import React from "react";
import "./About.css";
import Header from "./Header";
import Copyright from "./Copyright";

function About() {
  return (
    <>
    {/* TODO: Finish writing bio and possibly include a links section for resources */}
      <Header />
      <h2>Meet the Author</h2>
      <p>
        About the author section with picture and mention of BookInd, possible
        links to resources I use (editor, image creation, software, etc)
      </p>
      <p>
        What happens when you name your child after a body part and a room in
        the house?
        <br />
        <br />
        He creates his own serial killer, breaks the rules of writing by
        creating a story with both third and first person storytelling (all
        while not giving names to any significant character), and creates an
        ending that has left readers gasping and in awe! That's what.
        <br />
        <br />
        Dicky Kitchen Jr brings his unique personality and life experiences to
        his writings (probably shouldn't say that after the whole "creates his
        own serial killer" thing), resulting in stories unlike any seen before.
      </p>
      <Copyright />
    </>
  );
}

export default About;
