import React, { useState } from "react";
import "./Thrillers.css";
import { Parallax } from "react-parallax";
import { Twirl as Hamburger } from "hamburger-react";
import Header from "./Header";
import Nav from "./Nav";
import Copyright from "./Copyright";
import Hooded from "../Images/hooded-figure.webp";
import BrokenWoman from "../Images/woman-apart.webp";

function Thrillers() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: create write-ups for book blurbs and reviews, possibly use the ones from the previous site? Possibly use a click through option for the reviews to save on screen space? */}
      <Header />

      <div className="thrillers">
        <div className="nav-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? <Nav /> : null}
        </div>
        <h2>Thrillers</h2>

        <h3 className="book-title">Prey/Pray: Origin of The Average Man</h3>
        <Parallax
          blur={0}
          bgImage={Hooded}
          bgImageAlt="hooded figure under a light"
          strength={200}
        >
          <div className="blurb-block">
            <p className="book-blurb">
              Get to know a new kind of serial killer in this psychological
              thriller that will have you guessing until the last page!
            </p>
              <br />
            <p className="book-blurb">
              What drives an average man to kill? To violently plot the taking
              of a life? What drives The Average Man to murder?
            </p>
              <br />
            <p className="book-blurb">  
              That’s what The Tall Man finds himself asking as he sits across
              from a murderer awaiting trial. Requested personally for this
              interview, The Tall Man sits with no means to record the
              interaction, and listens as The Average Man recounts his crimes.
              As the tale unfolds, The Tall Man finds that there’s far more
              darkness to the killer than he ever could have imagined.
            </p>  
              <br />
            <p className="book-blurb">  
              Tensions rise, and The Tall man listens as The Average Man
              confesses to more than just the murders he’s on trial for. But
              what is the killer’s purpose behind these confessions, and will
              The Tall Man survive as a far more horrifying tale unravels before
              him?
            </p>  
              <br />
            <p className="book-blurb">  
              Can The Tall Man piece everything together and ensure the killer
              pays for his crimes? Or will he become the next prey?
            </p>
              <br />
            <p className="book-blurb">  
              Author Dicky Kitchen Jr. offers a tantalizing psychological
              thriller that will have readers caught with bated breaths. For by
              the end, it will come to light that not everyone is what they
              seem…
            </p>
          </div>
        </Parallax>

        <h3 className="book-title">Prey/Pray: Hunting Party - The Nurse</h3>
        <Parallax
          blur={0}
          bgImage={BrokenWoman}
          bgImageAlt="split face of a woman screaming"
          strength={300}
        >
          <div className="blurb-block">
            <p className="book-blurb">
              The difference between a man and a monster is that one is a
              dangerous creature capable of vile dark destruction, and the other
              is fiction.
            </p>  
              <br />
            <p className="book-blurb">  
              Pulled from the pages of 'Prey/Pray: Origin of The Average Man',
              learn the truth behind how The Nurse came to be as she uncovers
              the depths that someone can be pushed, and what happens when given
              the choice of break or be broken.
            </p>  
              <br />
            <p className="book-blurb"> 
              Sections of this novella come straight from 'Prey/Pray: Origin of
              The Average Man' and may offer minor spoilers from the novel. If
              you prefer not to have any spoilers from 'Prey/Pray: Origin of The
              Average Man', read that story before reading this one.
            </p>
          </div>
        </Parallax>
      </div>

      <Copyright />
    </>
  );
}

export default Thrillers;
