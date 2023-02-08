import React, { useState } from 'react';
import './KidFriendly.css';
import { Twirl as Hamburger } from "hamburger-react";
import Nav from './Nav';
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PeterPiperSample from '../BookSamples/PeterPiperSample.pdf';
import PeterPiperCover from '../Images/Peter-Piper-book-cover.webp';
import KidsBooks from '../Images/kids-books.webp';

const star = <FontAwesomeIcon className="star" icon={faStar} />;

function KidFriendly() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className='kids-section'>
      <div className="nav-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen ? <Nav /> : null}
      </div>
     
     <h2 className="kids-book-title">The True Tale of Peter Piper</h2>
        <Parallax
          blur={3}
          bgImage={KidsBooks}
          bgImageAlt="various kids books"
          strength={200}
        >
          <div className="kids-book-cover">
            <img
              className="Peter-Piper-cover"
              src={PeterPiperCover}
              alt="The True Tale of Peter Piper book cover"
            />
          </div>

          <div className="kids-blurb-block">
            <p className="kids-book-blurb">
              Taking inspiration from the tongue twister originally published by John Harris in 1813, this re-imagining of the classic will leave you and your children laughing as you slip, trip, and fall over the tongue twisting tale of Peter Piper and his pickled peppers.
            </p>
            <br/>
            <p className="kids-book-blurb">Will you giggle at your goofy gaffes as your toppling tumbling tongue twist? Or will you tackle the twisting turns triumphantly?
            </p>
            <br/>
            <p className="kids-book-blurb">Put your tongue twister skills to the test as you follow Peter Piper's tale of picking peppers, pickling plants, and perplexing pickled people in peril!
            </p>
          </div>

          <div className="kids-review-block">
            <h3 className="kids-review-h3">Reviews</h3>

            <div className='kids-review-box'>
             <p className="kids-reviewer">
              Mary Dixon (Amazon review):
            </p>
            <p className="kids-rating">5 out of 5 {star}</p>
            <p className="kids-review">
              Fun and funny for all... I loved reading the fun filled pages of this book with my grandson...
            </p> 
            </div>
            
            <br />
            
            <div className='kids-review-box'>
              <p className="kids-reviewer">Marybeth Geer (Amazon review):</p>
            <p className="kids-rating">5 out of 5 {star}</p>
            <p className="kids-review">
              Great book for inquisitive minds and educational...
            </p>
            </div>
            
            <br />

            <div className='kids-review-box'>
              <p className="kids-reviewer">
              LiveLaughRead (Amazon review)
            </p>
            <p className="kids-rating">5 out of 5 {star}</p>
            <p className="kids-review">
              Perfect Peter Piper twist... Super cute and unique story of Peter Piper! It will definitely get your tongue in a twist...
            </p>
            </div>
      
          </div>

          <div className="kids-book-footer">
            <a
              className="kids-book-link"
              href={PeterPiperSample}
              target="_blank"
              rel="noreferrer"
            >
              Sample
            </a>
            <a
              className="kids-book-link"
              href="https://a.co/d/ieaFsT9"
              target="_blank"
              rel="noreferrer"
            >
              Purchase
            </a>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default KidFriendly
