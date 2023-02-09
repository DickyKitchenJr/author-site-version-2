import React, { useState } from "react";
import "./BookInd.css";
import { Twirl as Hamburger } from "hamburger-react";
import Nav from "./Nav";
import BookIndLogo from "../Images/BookInd-logo.webp";

function BookInd() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="bookind">
        <div className="nav-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? <Nav /> : null}
        </div>

        <div className="bookind-header">
          <img
            className="bookind-logo"
            src={BookIndLogo}
            alt="open book floating in a circular stack of books"
          />
          <h2 className="bookind-h2">BookInd</h2>
        </div>

        <h3 className="bookind-h3">What Is BookInd?</h3>

        <p className="bookind-p">
          BookInd is a community for writers and authors of all styles and all
          levels of talent to come and network in order to talk all things
          writing and grow as artist.
        </p>
        <br />
        <p className="bookind-p">
          It doesn't matter if you are a hobbyist who writes to amuse
          themselves, or a seasoned author with numerous published books. If you
          are a writer, you are welcomed at BookInd.
        </p>
        <br />
        <p className="bookind-p">
          You'll find writers of varying genres on BookInd from all over the
          world, each with their own strengths and insights on various writing
          topics.
        </p>
        <br />

        <h3 className="bookind-h3">Why Was BookInd Created?</h3>

        <p className="bookind-p">
          BookInd was made to be a safe and stress-free alternative to other
          social media options that exist.
        </p>
        <br />
        <p className="bookind-p">
          Like many other writers, Dicky Kitchen Jr joined social media
          platforms to meet other writers and share his writings with the world.
          Unfortunately, it didn't take long to see the way most social media
          platforms work is deeply flawed.
        </p>
        <br />
        <p className="bookind-p">
          Instead of helping to promote creativity, Dicky found most social
          media platforms forced creatives to play an endless game; trying to
          appease a faceless ever-changing algorithm in order to be discovered
          by anyone. The endless grind of picking the correct hashtags, pairing
          things with the correct audio clips, and using the correct filter of
          the week (all while dealing with scammer's endless DMs), created an
          environment where people were trying to match everyone else rather
          than excerise their unique creative voices.
        </p>
        <br />
        <p className="bookind-p">
          After a couple years of trying to make the social media grind work,
          Dicky decided there needed to be a better alternative. There needed to
          be a place free from the algorithms and scammers, where writers could
          network and discuss ideas without the need to perform to get noticed.
          And in light of not being able to find such a place, he made one.
        </p>
        <br />
        <p className="bookind-p">
          Using the Discord platform as a starting point, BookInd was built with
          the writer (not the platform) as the most important thing.
        </p>
        <br />

        <h3 className="bookind-h3">Who Can Join?</h3>

        <p className="bookind-p">
          Any and all writers are welcome to join BookInd.
        </p>
        <br />
        <p className="bookind-p">
          You don't have to worry about your skill level or genre preferences.
          If you are a writer, you are welcome to join us.
        </p>
        <br />
        <p className="bookind-p">
          All you need is a free Discord account and then you can join the{" "}
          <a
            href="https://discord.gg/Ze5aAXa8Y3"
            target="_blank"
            rel="noreferrer"
          >
            BookInd Community
          </a>{" "}
          online or on the app.
        </p>
        <br />

        <h3 className="bookind-h3">What Happens In The Community?</h3>

        <p className="bookind-p">
          The BookInd community is constantly evolving to meet the needs of the
          members, but currently we have sections for:
        </p>
        <ul className="bookind-ul">
          <li>Weekly Writing Prompts</li>
          <li>Open Writing</li>
          <li>Book Blurb Feedback</li>
          <li>Book Cover Feedback</li>
          <li>Book Creation Resources</li>
          <li>Book Marketing Strategies</li>
          <li>World Building</li>
          <li>Character Development</li>
          <li>General Conversations</li>
          <li>and more...</li>
        </ul>
        <br />

        <h3 className="bookind-h3">
          Can I Promote My Book Or Service On BookInd?
        </h3>

        <p className="bookind-p">
          Members can EARN the right to promote their book(s) or book related
          service(s) on the BookInd platform. But to avoid being bogged down
          with spam and scammers who would only join to push their products, we
          don't allow members to promote books and services right when they
          join.
        </p>
        <br />
        <p className="bookind-p">
          With time and contributing to conversations in the community, members
          can gain access to areas where they can promote their book(s) and/or
          book related service(s).
        </p>
        <br />
        <p className="bookind-p">
          This is one of the steps taken to keep the community healthy and
          promote genuine interactions within BookInd.
        </p>
        <br />

        <h3 className="bookind-h3">Does BookInd Have Rules?</h3>

        <p className="bookind-p">
          Yes. We put our members and the safety of the community first, so the
          following rules are enforced:
        </p>
        <ul className="bookind-ul">
          <li>
            No non-writers who are book "promoters", "marketers", or "reviewers"
            are permitted to join. (this is due to the large volume of scams
            that target writers)
          </li>
          <li>
            No spam or self-promotion (server invites, advertisements, etc.)
            without permission from a staff member. This includes DMing fellow
            members.
          </li>
          <li>
            For writers who have a book related service or book you wish to
            promote, you have to earn enough XP to gain access to the channels
            specifically for promoting and follow the rules within the channels.
            Failure to do so or promoting anywhere else will result in being
            banned.
          </li>
          <li>
            No DMing members without prior consent being given in the channels.
          </li>
          <li>
            Treat everyone with respect. Absolutely no harassment, witch
            hunting, sexism, racism, or hate speech will be tolerated.{" "}
          </li>
          <li>
            If you see something against the rules or something that makes you
            feel unsafe, let staff know.
          </li>
          <li>
            We understand that writing can include things of a risqué and
            grotesque nature, but due to having some younger and more sensitive
            writers among us, we ask that you keep those conversations to the
            adult writing channel.
          </li>
          <li>
            Keep conversations to writing and writing-related nature (editing,
            formatting, book cover, sales techniques, and writing/publishing
            adjacent conversations are welcome).
          </li>
          <li>
            Trigger Warning: The adult-content-section channel is for
            conversations that may include detailed mentions of anything and
            everything that would require a trigger warning. By entering that
            section, you acknowledge that you are willingly exposing yourself to
            things that may be upsetting.
          </li>
          <li>
            While the adult-content-section can have conversations related to
            disturbing subjects (i.e. strong language, violence, abuse, sex),
            directing these things in an abusive nature at any member will not
            be tolerated even within the adult-content-section. Always be
            respectful.
          </li>
          <li>
            Plagiarizing, copyright infringement, and claiming other's creations
            as your own will not be tolerated and will result in banning. This
            is not limited to written creations.
          </li>
        </ul>
        <br />
        <p className="bookind-p">
          The rules are subject to change and be modified as circumstances
          require, but our focus will remain on protecting members and
          encouraging creativity.
        </p>
        <br />
        <h3 className="bookind-h3" style={{textAlign: 'center'}}>
          What are you waiting for? Come join us! 😁
        </h3>
        <br />
      </div>
    </>
  );
}

export default BookInd;
