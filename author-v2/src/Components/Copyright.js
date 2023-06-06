import React from "react";
import "./Copyright.css";

function Copyright() {
  return (
    <>
      <p className="copyright">
        If you enjoy reading indie books, check out{" "}
        <a
          className="copyrightA"
          href="https://indiebookvault.com/"
          target="_blank"
          rel="noreferrer"
        >
          Indie Book Vault
        </a>{" "}
        to find other great authors like Dicky Kitchen Jr
      </p>
      <p className="copyright">
        Copyright Notice: All writings, blogs, books, and content within this
        site belong to Dicky Kitchen Jr and are not permitted to be used without
        written permission.
      </p>
    </>
  );
}

export default Copyright;
