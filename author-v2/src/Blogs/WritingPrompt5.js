import React from 'react';
import { NavLink } from "react-router-dom";
import WriteSomething from "../Images/write-something.webp";
import Foggy from '../Images/foggy-buildings.webp';

function WritingPrompt5() {
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
      <p className="blog-p writing-prompt">Writing Prompt -</p>

      <figure className="blog-figure">
        <img
          className="blog-img"
          src={Foggy}
          alt="buildings seen through dense fog"
        />
        <figcaption className="blog-fig-cap">Visual Writing Prompt</figcaption>
      </figure>

      <p className="blog-p">
        The sight would have been odd anywhere, but in this particular part of
        town it was even more so.
      </p>
      <br />
      <p className="blog-p">
        A man in a black poncho with an athletic build holding a bright pink
        balloon on the end of an unusually long ribbon paced casually in front
        of the set of old Victorian houses.
      </p>
      <br />
      <p className="blog-p">
        The residents of the high-end neighborhood gazed through their windows
        at the oddity, faces twisted in perplexed and amused bewilderment. All
        except for the faces from one house; the house at the center of the odd
        man’s repeated path.
      </p>
      <br />
      <p className="blog-p">
        The sole resident of that home glowered at the man through the windows,
        his frustration growing with every pass of the house.
      </p>
      <br />
      <p className="blog-p">
        After the fifteenth pass, the inhabitant of the house reached their
        limit and stormed out the front door.
      </p>
      <br />
      <p className="blog-p">
        It was clear by his forceful thudding gait that his intent was to menace
        the poncho adorned man, and yet his approach was almost completely
        ignored by the balloon toting oddity.
      </p>
      <br />
      <p className="blog-p">“You need to move on!” the resident demanded. </p>
      <br />
      <p className="blog-p">
        “This is a nice neighborhood.” the man replied calmly, “Great view of
        the clock and tower from here.”
      </p>
      <br />
      <p className="blog-p">
        “Find a view elsewhere mate. You’ve worn out your welcome here.” The
        resident stated, erecting his already rigid posture to present himself
        as large as possible.
      </p>
      <br />
      <p className="blog-p">
        Pausing and glancing around, the man in the poncho walked up to a nearby
        cast-iron fence and tied the balloon ribbon to it’s rail.
      </p>
      <br />
      <p className="blog-p">
        “That should do nicely.” He said as he secured the ribbon, balloon
        floating gently above.
      </p>
      <br />
      <p className="blog-p">“WHAT IS WRONG WITH YOU?!”</p>
      <br />
      <p className="blog-p">
        The man in the poncho looked back at the angry man and shrugged.
      </p>
      <br />
      <p className="blog-p">
        “I’m not sure I understand what you mean. Can you be more specific?”
      </p>
      <br />
      <p className="blog-p">
        “More specific? You want more specific? You’re out here with a
        ridiculous bright pink balloon and a poncho with no rain anywhere in
        sight and you need me to point out to you that there is something wrong
        with you? What kind of grown man prances around with a balloon?” the
        irate man questioned.
      </p>
      <br />
      <p className="blog-p">
        “There’s no flags. Flags are easier, but there are none. So, I brought a
        balloon.” The man in the poncho stated, shrugging again.
      </p>
      <br />
      <p className="blog-p">
        “Are you some kind of loon? A balloon carrying, poncho wearing idiot?
        GET OUT OF HERE!” the anger welled in the man as he spoke, and he
        pounded over to the balloon and began to untie it from the fence.
      </p>
      <br />
      <p className="blog-p">
        “I wear the poncho to avoid the mess.” The man replied then touched his
        collar bone “Is that good?”
      </p>
      <br />
      <p className="blog-p">
        “What do you mean is that good? No, it’s not good you buffoon! What kind
        of moron wears a poncho all the..” the angry man paused as he noticed a
        small electronic device barely showing from the man’s ear.
      </p>
      <br />
      <p className="blog-p">
        “Send it.” The man in the poncho calmly said before pulling up the hood
        of the poncho and turning his back to the angry resident.
      </p>
      <br />
      <p className="blog-p">
        A look of concern briefly replaced the furrowed angry brows of the once
        shouting man, but just briefly.
      </p>
      <br />
      <p className="blog-p">
        A loud crack echoed through the air and a second later the man’s head
        disappeared, a pink mist taking it’s place as his body limply dropped to
        the ground.
      </p>
      <br />
      <p className="blog-p">
        The man in the poncho turned back and looked down at the lifeless man,
        then noted a few small red droplets on his poncho.
      </p>
      <br />
      <p className="blog-p">
        “Like I said, it helps avoid the mess.” He stated before calmly walking
        past the body and out of the neighborhood.
      </p>
      <br />
      <p className="blog-p">
        “Confirm target is neutralized.” A voice stated into the man’s ear.
      </p>
      <br />
      <p className="blog-p">
        “Confirmed. Target is off the table.” He replied.
      </p>
      <br />
    </>
  );
}

export default WritingPrompt5
