import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import meme from "../images/sutmm.webp";

export default function MainContent() {
  return (
    <div className="mainContent-container">
      <form className="main-form-container">
        <div className="main-input-container">
          <input
            className="main-input-above main-text"
            type="text"
            placeholder="Shut up"
          ></input>
          <input
            className="main-input-below main-text"
            type="text"
            placeholder="and take my money"
          ></input>
        </div>
        <button className="main-button main-text">
          Get a new meme image
          <FontAwesomeIcon className="button-icon" icon={faImage}></FontAwesomeIcon>
        </button>
      </form>
      {/* <div className="main-meme-container"></div> */}
        <img className="main-meme" src={meme} alt="boogers" />
    </div>
  );
}
