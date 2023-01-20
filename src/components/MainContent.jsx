import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

export default function MainContent() {
  return (
    <div className="mainContent-container">
      <form className="main-form-container">
        <div className="main-input-container">
          <input className="main-input-above"></input>
          <input className="main-input-below"></input>
        </div>
        <button className="main-button">
          Get a new meme image
          <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
        </button>
      </form>
      <img className="main-meme" src="" alt="boogers" />
    </div>
  );
}
