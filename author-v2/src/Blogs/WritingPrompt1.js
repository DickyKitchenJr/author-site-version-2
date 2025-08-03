import React from 'react';
import { NavLink } from "react-router-dom";
import WriteSomething from '../Images/write-something.webp';

function WritingPrompt1() {
  return (
    <>
      <br />
      <NavLink className="blog-nav-link" to="/blogs">
        ← back
      </NavLink>

      <div className="blog-header">
        <h2 className="blog-h2">Writing Prompt Challenge</h2>
        <h3 className="blog-h3">Prompt from 9/21/2022</h3>
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
      <p className="blog-p writing-prompt">
        Writing Prompt - A mysterious package is on your doorstep when you wake
        up.
      </p>
      <br />
      <p className="blog-p">
        Dew kissed the grass as the sun woke from it's daily slumber.
      </p>
      <br />
      <p className="blog-p">
        My muscles ached from the previous night's hunt and I desperately craved
        a shower and sleep. Walking through the adjacent field, I approached the
        motel, and my room entered my sight.
      </p>
      <br />
      <p className="blog-p">My room, and something else...</p>
      <br />
      <p className="blog-p">
        A small box sat in front of my door, staring at me as I stared back.
      </p>
      <br />
      <p className="blog-p">
        Equal parts curiosity and concern consumed my mind as my body
        instinctually crouched, minimizing myself as a target.
      </p>
      <br />
      <p className="blog-p">
        I wasn't expecting a delivery, and had recently touched base with the
        rest of my hunting party, with none mentioning dropping off anything.
      </p>
      <br />
      <p className="blog-p">
        My vision narrowed and I surveyed my surroundings, attuned to any trace
        movement or object out of place.
      </p>
      <br />
      <p className="blog-p">
        Every detail was consumed until I was confident no one and no thing
        watched me, then I slowly approached the package.
      </p>
      <br />
      <p className="blog-p">
        It was roughly the size of my foot, with no labels attached to it's
        generic brown exterior.
      </p>
      <br />
      <p className="blog-p">
        I walked around it, testing the door to ensure it hadn't been tampered
        with and found no signs of tampering. A good sign that whoever dropped
        off the package hadn't broken in.
      </p>
      <br />
      <p className="blog-p">
        I knelt and gently applied pressure to the side of the box, looking
        underneath for potential traps as I did.
      </p>
      <br />
      <p className="blog-p">
        The box appeared to be exactly what it was, an average box.
      </p>
      <br />
      <p className="blog-p">
        One final glance around at my surroundings, and I lifted the package and
        entered my motel room.
      </p>
      <br />
      <p className="blog-p">
        Finally inside, I sat on the bedside, feeling an object shift in the box
        with a notable thud as it contacted the inner wall.
      </p>
      <br />
      <p className="blog-p">
        The weight offered no significant detail and I gazed downward.
      </p>
      <br />
      <p className="blog-p">Bomb? Gift? Schrodinger's cat? </p>
      <br />
      <p className="blog-p">
        Only opening the box would reveal it's truth, so I did.
      </p>
      <br />
      <p className="blog-p">
        Slowly I released the tape securing the box and lifted the flaps.
      </p>
      <br />
      <p className="blog-p">
        The room disappeared as my eyes focused on the contents...
      </p>
      <br />
      <p className="blog-p">A blood-soaked knife...</p>
      <br />
      <p className="blog-p">MY blood-soaked knife!</p>
      <br />
      <p className="blog-p">
        A smile crept across my face as a single word left my mouth.
      </p>
      <br />
      <p className="blog-p">"Interesting."</p>
      <br />
    </>
  );
}

export default WritingPrompt1
