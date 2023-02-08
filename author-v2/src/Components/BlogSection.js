import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./BlogSection.css";
import { Twirl as Hamburger } from "hamburger-react";
import Nav from "./Nav";
import BlogHome from "../Blogs/BlogHome";
import Pantser from "../Blogs/Pantser";
import TheReview from "../Blogs/TheReview";
import TalkingToMyself from "../Blogs/TalkingToMyself";
import LynnePearson from "../Blogs/LynnePearson";
import TheKid from "../Blogs/TheKid";
import KarinNordin from "../Blogs/KarinNordin"
import WritingPrompt1 from "../Blogs/WritingPrompt1";
import WritingPrompt2 from "../Blogs/WritingPrompt2";
import WritingPrompt3 from "../Blogs/WritingPrompt3";
import WritingPrompt4 from "../Blogs/WritingPrompt4";

function BlogSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Create addition files holding blogs; create links for individual blogs, look into building a comments section */}
      <div className="blog-section">
        <div className="nav-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? <Nav /> : null}
        </div>
        <Routes>
          <Route index element={<BlogHome />} /> 
          <Route path="pantser" element={<Pantser />} />
          <Route path="all-powerful-review" element={<TheReview />} />
          <Route path="talking-to-myself" element={<TalkingToMyself />} />
          <Route path="lynne-pearson" element={<LynnePearson />} />
          <Route path="the-kid" element={<TheKid />} />
          <Route path="karin-nordin" element={<KarinNordin />} />
          <Route path="writing-prompt-1" element={<WritingPrompt1 />} />
          <Route path="writing-prompt-2" element={<WritingPrompt2 />} />
          <Route path="writing-prompt-3" element={<WritingPrompt3 />} />
          <Route path="writing-prompt-4" element={<WritingPrompt4 />} />
        </Routes>
      </div>
    </>
  );
}

export default BlogSection;
