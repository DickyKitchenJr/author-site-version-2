import React, { useState } from "react";
import "./Thrillers.css";
import { Parallax } from "react-parallax";
import { Twirl as Hamburger } from "hamburger-react";
import Header from "./Header";
import Nav from "./Nav";
import Copyright from "./Copyright";
import Hooded from "../Images/hooded-figure.webp";
import TAMCover from "../Images/TAM-book-cover.webp";
import TornWoman from "../Images/woman-torn.webp";
import NurseCover from "../Images/Nurse-book-cover.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TAMSample from "../BookSamples/TheAverageManSample.pdf";
import NurseSample from "../BookSamples/TheNurseSample.pdf";

const star = <FontAwesomeIcon className="star" icon={faStar} />;

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

        <h2 className="book-title">Prey/Pray: Origin of The Average Man</h2>
        <Parallax
          blur={0}
          bgImage={Hooded}
          bgImageAlt="hooded figure under a light"
          strength={200}
        >
          <div className="book-cover">
            <img
              className="TAM-cover"
              src={TAMCover}
              alt="The Average Man book cover"
            />
          </div>

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

          <div className="review-block">
            <h3 className="review-h3">Reviews</h3>

            <p className="reviewer">
              DebbieDoesDewie (Amazon review - 2nd ed):
            </p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              Love the twistiness!... My absolute favorite part about it though
              are the little hints dropped into your lap along the way, without
              you realizing it until you are done... Honestly when I finished
              it, I was so glad my little brain had the forethought to purchase
              the novella because I definitely wasn't done with this story...
            </p>
            <br />

            <p className="reviewer">Natalie (Amazon review - 2nd ed):</p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              A unique and gripping thriller... In a market saturated with tired
              cliches and the same stories recycled into a different format,
              this book is a breath of fresh air... This is the kind of book
              that you have to carve out time to read, because once you pick it
              up, you won’t be able to put it down...
            </p>
            <br />

            <p className="reviewer">
              Andre Gonzalez, author of the Insanity series (Amazon review - 2nd
              ed):
            </p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              A must-read book!... It has been quite a while since a book has
              grabbed me and forced me to push aside everything else so I can
              focus on reading. This book did it!...
            </p>
            <br />

            <p className="reviewer">Sherry L. Ross (Amazon review - 1st ed):</p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              Gritty and Exciting Crime Thriller... a totally mind-blowing
              ending in which everything you have been thinking gets turned on
              its head...
            </p>
            <br />

            <p className="reviewer">Beth(Amazon review - 1st ed)</p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              A surprise of a book... I read a lot, so it’s rare for a book to
              catch me by surprise as completely as this one did. I definitely
              look forward to reading more from this author in the future....
            </p>
          </div>

          <div className="book-footer">
            <a
              className="book-link"
              href={TAMSample}
              target="_blank"
              rel="noreferrer"
            >
              Sample
            </a>
            <a
              className="book-link"
              href="https://a.co/d/hkHsEh2"
              target="_blank"
              rel="noreferrer"
            >
              Purchase
            </a>
          </div>
        </Parallax>

        <h2 className="book-title">Prey/Pray: Hunting Party - The Nurse</h2>
        <Parallax
          blur={2}
          bgImage={TornWoman}
          bgImageAlt="split face of a woman screaming and another mournful woman's face"
          strength={300}
        >
          <div className="book-cover">
            <img
              className="Nurse-cover"
              src={NurseCover}
              alt="The Nurse book cover"
            />
          </div>
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
          <div className="review-block">
            <h3 className="review-h3">Reviews</h3>

            <p className="reviewer">Rachel (Amazon review):</p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              Even better than Prey/Pray: Origin of The Average Man... a superb
              read, I read it all in one sitting.
            </p>
            <br />

            <p className="reviewer">Paula Menz (Amazon review):</p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              Hearbreaking and deeply satisfying... this novella will tug some
              heartstrings...
            </p>
            <br />

            <p className="reviewer">Aaron Jacobs (Amazon review):</p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              Must read if you like drama and great story... a riveting and
              creative story that keeps you locked in... This book is a great
              read, and you will not be disappointed...
            </p>
            <br />

            <p className="reviewer">LiveLaughRead (Amazon review):</p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              Quick emotional read... The author grabs your heart as his words
              wash over you and takes you on an emotional ride...
            </p>
            <br />

            <p className="reviewer">AmazonCustomer (Amazon review)</p>
            <p className="rating">5 out of 5 {star}</p>
            <p className="review">
              I started it the moment I finished Origin of The Average Man and I
              am extremely hopeful there will be more companion novellas to come
              because I still can't get enough...
            </p>
          </div>

          <div className="book-footer">
            <a
              className="book-link"
              href={NurseSample}
              target="_blank"
              rel="noreferrer"
            >
              Sample
            </a>
            <a
              className="book-link"
              href="https://a.co/d/iYd9upM"
              target="_blank"
              rel="noreferrer"
            >
              Purchase
            </a>
          </div>
        </Parallax>
      </div>

      <Copyright />
    </>
  );
}

export default Thrillers;
