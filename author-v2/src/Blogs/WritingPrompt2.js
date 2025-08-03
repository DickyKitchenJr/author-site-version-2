import React from 'react';
import { NavLink } from "react-router-dom";
import WriteSomething from "../Images/write-something.webp";
import Cloud from '../Images/cloud-creature.webp'

function WritingPrompt2() {
  return (
    <>
      <br />
      <NavLink className="blog-nav-link" to="/blogs">
        ← back
      </NavLink>

      <div className="blog-header">
        <h2 className="blog-h2">Writing Prompt Challenge</h2>
        <h3 className="blog-h3">Prompt from 9/28/2022</h3>
      </div>

      <figure className="blog-figure">
        <img
          className="blog-img"
          src={WriteSomething}
          alt="typewriter with 'write something' on the paper in it"
        />
      </figure>

      <p className="blog-p">
        On occasion I will create shorts using writing prompts provided to me
        from random people. The following is one such prompt and my subsequent
        use of the prompt:
      </p>
      <br />
      <p className="blog-p writing-prompt">Writing Prompt -</p>

      <figure className="blog-figure">
        <img
          className="blog-img"
          src={Cloud}
          alt="cloud shaped creature coming over mountains"
        />
        <figcaption className="blog-fig-cap">Visual Writing Prompt</figcaption>
      </figure>

      <p className="blog-p">We thought we’d be safe in the woods.</p>
      <br />
      <p className="blog-p">
        Of course, we did. Hubris was what got us here to begin with.
      </p>
      <br />
      <p className="blog-p">
        The world watched in horror as the creature crossed the globe destroying
        everything in its path.
      </p>
      <br />
      <p className="blog-p">At first no one knew what to think.</p>
      <br />
      <p className="blog-p">Honestly, what was there to think?</p>
      <br />
      <p className="blog-p">
        A giant monster appeared in Lahore, Pakistan and within a day, Lahore
        was gone. Then it headed to Delhi, India, and wiped it from the face of
        the map. After that it went to Dhaka, Bangladesh and destroyed it before
        turning its attention back to India, leaving a husk where a Ghaziabad
        once was.
      </p>
      <br />
      <p className="blog-p">
        There didn’t appear to be any rhyme or reason to the creature’s targets.
      </p>
      <br />
      <p className="blog-p">As for fighting back?</p>
      <br />
      <p className="blog-p">
        Anyone who thinks you can fight back against a creature the size of
        mountains has watched too many movies.
      </p>
      <br />
      <p className="blog-p">
        Don’t get me wrong, there was an attempt to fight back. It was just
        pointless.
      </p>
      <br />
      <p className="blog-p">
        From the videos I saw online, the creature didn’t even know it was being
        attacked.
      </p>
      <br />
      <p className="blog-p">
        Missiles and mortars were launched at the creature’s mass, and simply
        disappeared into its billowing veil. No bright fiery explosion, no
        deafening boom. Specks of dust not worth the creature’s notice.
      </p>
      <br />
      <p className="blog-p">
        The creature moved completely indifferent to its victim’s futile
        attempts of survival.
      </p>
      <br />
      <p className="blog-p">
        It wasn’t until it annihilated it’s 25th target; Anyang, China, that a
        scientist specializing in atmospheric microplastics noticed it had
        destroyed the most polluted cities in the world.
      </p>
      <br />
      <p className="blog-p">
        Word spread through the news cycles and the world filled with dread as
        busy cities and industrial hubs emptied, fleeing anywhere that could
        even be remotely thought of as highly polluted.
      </p>
      <br />
      <p className="blog-p">
        Of course, humans being humans, they ran from their polluted prisons,
        dragging their chains behind them. Leaving a trail of pollution like
        bread crumbs for the creature to follow.
      </p>
      <br />
      <p className="blog-p">
        As the creature’s decimation continued, some of us managed to survive by
        living minimalist lives in what little forested areas remained untouched
        by human hands.
      </p>
      <br />
      <p className="blog-p">
        We learned to live without destroying everything around us. We learned
        to only take what we needed.
      </p>
      <br />
      <p className="blog-p">
        I thought it would be enough, but looking up at the indifference in the
        creature’s eyes as it closes in on my tribe, I now know the truth.
      </p>
      <br />
      <p className="blog-p">
        We pissed off mother nature one too many times, and there will be no
        quarter shown, no mercy given. There is no surviving this.
      </p>
      <br />
    </>
  );
}

export default WritingPrompt2
