import React from 'react';
import { NavLink } from "react-router-dom";
import WriteSomething from "../Images/write-something.webp";
import Spider from "../Images/spider.webp";

function WritingPrompt7() {
  return (
    <>
      <br />
      <NavLink className="blog-nav-link" to="/blogs">
        ← back
      </NavLink>

      <div className="blog-header">
        <h2 className="blog-h2">BookInd Writing Prompt</h2>
        <h3 className="blog-h3">Prompt from 11/02/2022</h3>
      </div>

      <figure className="blog-figure">
        <img
          className="blog-img"
          src={WriteSomething}
          alt="typewriter with 'write something' on the paper in it"
        />
      </figure>

      <p className="blog-p">
        Every week a new writing prompt is added to the BookInd community. The
        rules are simple - use the prompt or it's essence to create a short
        piece of writing. The following is one such prompt and my subsequent use
        of the prompt:
      </p>
      <br />
      <p className="blog-p writing-prompt">
        Writing Prompt - Using personification write about two roommates, as
        described in the picture below, from the perspective of both the spider
        and the human.
      </p>

      <figure className="blog-figure">
        <img
          className="blog-img"
          src={Spider}
          alt="a jumping spider with 'what if the spider you killed in your home thought you were roommates' written under it"
        />
      </figure>

      <p className="blog-p" style={{ fontStyle: "italic" }}>
        Jeff:
      </p>
      <br />
      <p className="blog-p">You know, humans aren’t so bad. </p>
      <br />
      <p className="blog-p">
        Take my roommate Nick for example. He’s really a great guy.
      </p>
      <br />
      <p className="blog-p">
        I know, I know. A human and a spider as roommates doesn’t sound like a
        good idea on paper, but we make it work. And if I’m being honest, we
        have a lot in common.
      </p>
      <br />
      <p className="blog-p">Nick is a writer, I’m a writing spider.</p>
      <br />
      <p className="blog-p">
        We both like leaving the place a little messy. I like it this way
        because it attracts a lot of flies to my web, but I’m not really sure
        why Nick likes it this way.
      </p>
      <br />
      <p className="blog-p">
        We’re both most active at night and first thing in the morning, then
        tend to nap and relax in the afternoon.
      </p>
      <br />
      <p className="blog-p">Seriously, it’s a great relationship.</p>
      <br />
      <p className="blog-p">There is this one thing though…</p>
      <br />
      <p className="blog-p">
        The other night Nick had a female friend over, and they started getting
        a little frisky with each other in the living room, so I gave a little
        wave just to remind them that I was there so they didn’t embarrass
        themselves by doing too much in front of me.
      </p>
      <br />
      <p className="blog-p">
        Nick’s female friend must have been really sensitive to having others
        watching, because she flipped out and ran screaming out of our
        apartment.
      </p>
      <br />
      <p className="blog-p">
        Nick ran after her, and I felt really bad about the whole situation so I
        made myself scarce.
      </p>
      <br />
      <p className="blog-p">I hope he isn’t mad.</p>
      <br />
      <br />
      <p className="blog-p" style={{ fontStyle: "italic" }}>
        Nick:
      </p>
      <br />
      <p className="blog-p">I know I’m supposed to live and let live.</p>
      <br />
      <p className="blog-p">
        I mean, come on. I meditate. I journal. I even have a vegan blog that
        gets sent out to my tens of followers. I am a peaceful, earth loving,
        totally centered guy, but enough is enough.
      </p>
      <br />
      <p className="blog-p">
        I’ll admit, there was a certain novelty to having a writing spider
        living in the apartment when I first moved in.
      </p>
      <br />
      <p className="blog-p">
        It was cool seeing the new web designs every day, and it helped keep the
        other bugs in the apartment under control, but this whole thing with
        Cheryl…
      </p>
      <br />
      <p className="blog-p">I just can’t let that slide.</p>
      <br />
      <p className="blog-p">
        I’ve been trying for months to get her back to my place. I even did hot
        stone latex goat yoga to get close to her.
      </p>
      <br />
      <p className="blog-p">
        I still have burns, missing hair, and hoof prints in uncomfortable
        places from that…
      </p>
      <br />
      <p className="blog-p">
        All the work, and it finally paid off. I finally had her on my couch!
      </p>
      <br />
      <p className="blog-p">
        We were getting hot and heavy and were seconds away from moving it to
        the bedroom when that stupid spider had to start wiggling around, and
        she saw it.
      </p>
      <br />
      <p className="blog-p">
        How was I supposed to know she had arachnophobia?
      </p>
      <br />
      <p className="blog-p">
        And that was that. I went from lining up to score to just having a kick
        stand next to a goat bruise.
      </p>
      <br />
      <p className="blog-p">Do you know how long it’s been for me?</p>
      <br />
      <p className="blog-p">I’m about to burst here!</p>
      <br />
      <p className="blog-p">
        No. Peace is not an option. I’m smashing something, even if it’s just
        that jerk spider with my hemp sandal!
      </p>
      <br />
    </>
  );
}

export default WritingPrompt7
