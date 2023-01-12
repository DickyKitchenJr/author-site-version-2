import React from 'react';
import './About.css';
import Header from "./Header";
import Copyright from "./Copyright";

function About() {
  return (
    <>
        <Header />
        <h2>Meet the Author</h2>
        <p>About the author section with picture and mention of BookInd, possible links to resources I use (editor, image creation, software, etc)</p>
        <Copyright /> 
    </>
  )
}

export default About
