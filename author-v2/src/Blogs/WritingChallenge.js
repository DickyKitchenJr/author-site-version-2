import React from "react";
import { NavLink } from "react-router-dom";
import WriteSomething from "../Images/write-something.webp";

function WritingChallenge() {
  return (
    <>
      <br />
      <NavLink className="blog-nav-link" to="/blogs">
        ← back
      </NavLink>

      <div className="blog-header">
        <h2 className="blog-h2">Writing Prompt Challenge</h2>
        <h3 className="blog-h3">Challenge Issued By Author Brittany Putzer</h3>
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
        from random people. Sometimes people take advantage of that and try to
        force me to write in genres outside of my comfort zone.
      </p>
      <br />
      <p className="blog-p">
        Such is the case when the evil, diabolical, romance writer;{" "}
        <a
          href="https://www.brittanyputzer.com/"
          target="_blank"
          rel="noreferrer"
        >
          Brittany Putzer
        </a>
        , challenged me (a thriller writer) to write a short in the romance
        genre.
      </p>
      <br />
      <p className="blog-p">
        The following is the result of that challenge. Did I successfully
        complete the challenge, or did I fail? I guess that's ultimately up to
        you to decide. But it's good to step outside of your comfort zone from
        time to time, so I did my best impersonation of a romance writer:
      </p>
      <br />
      <p className="blog-p writing-prompt">
        A Thriller Writer's Attempt At Romance-
      </p>
      <br />
      <p className="blog-p">
        It wasn’t her eyes that held the breath in his chest. Though no emerald
        on Earth could match their radiance, the green hues that danced through
        her irises would fade as she aged and yet his feelings would remain.
      </p>
      <br />
      <p className="blog-p">
        Nor was it the enticing sway of her hips as she walked that caused his
        heart to pause in honor of her presence. Her perfect body was something
        crafted by Aphrodite and he had witnessed entire crowds go silent in awe
        of her as she simply walked past.
      </p>
      <br />
      <p className="blog-p">
        No, he knew beauty and sexuality were fleeting in life. That wasn’t what
        captivated him.
      </p>
      <br />
      <p className="blog-p">
        It was something more powerful that froze him in this moment.
      </p>
      <br />
      <p className="blog-p">
        The breath in his chest released, he exhaled, and the answer came to
        him.
      </p>
      <br />
      <p className="blog-p">
        She was the eye of the hurricane that was his life. The perfect
        stillness that brought peace despite the chaos surrounding him.
      </p>
      <br />
      <p className="blog-p">
        When she was there all the pain and stress of life hushed, and only love
        and calm remained.
      </p>
      <br />
      <p className="blog-p">
        She cocked her head to the side as he stared, a strand of hair gently
        falling across her face.
      </p>
      <br />
      <p className="blog-p">“Are you ok?”</p>
      <br />
      <p className="blog-p">
        “Yeah, I’m ok.” He replied, snapping out of his amorous gaze.
      </p>
      <br />
      <p className="blog-p">
        “You looked deep in thought.” She said, her eyes narrowed with
        curiosity.
      </p>
      <br />
      <p className="blog-p">
        “I suppose I was. I was thinking of something that amazes me.” He said
        with a gentle smile.
      </p>
      <br />
      <p className="blog-p">“Oh really? What’s that?” she asked.</p>
      <br />
      <p className="blog-p">“You.”</p>
      <br />
      <p className="blog-p">His eyes met hers as she blushed.</p>
      <br />
      <p className="blog-p">
        Her hand reached up and gently touched his cheek as she gave him the
        softest kiss; satin touching his lips.
      </p>
      <br />
      <p className="blog-p">
        “Come on silly. We’re going to be late for dinner.” She said.
      </p>
      <br />
      <p className="blog-p">“Ok, my love. Let’s go.”</p>
      <br />
    </>
  );
}

export default WritingChallenge;
