import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
// import meme from "../images/sutmm.webp";
import memesData from "../memesData.js";


export default function MainContent() {
  let currentMeme;
  let currentMemeUrl = "https://i.imgflip.com/3si4.jpg";

  function handlerMemeImage() {
    let index = Math.floor(Math.random() * memesData.data.memes.length);
    currentMeme = memesData.data.memes[index];
    currentMemeUrl = currentMeme.url;
  }

  return (
    <div className="mainContent-container">
      <form className="main-form-container">
        <div className="main-input-container">
          <input
            className="main-input main-text"
            type="text"
            placeholder="Shut up"
          ></input>
          <input
            className="main-input main-text"
            type="text"
            placeholder="and take my money"
          ></input>
        </div>
        <button className="main-button main-text" onClick={handlerMemeImage}>
          Get a new meme image
          <FontAwesomeIcon
            className="button-icon"
            icon={faImage}
          ></FontAwesomeIcon>
        </button>
      </form>
      {/* <div className="main-meme-container"></div> */}
      <img className="main-meme" src={currentMemeUrl} alt="meme hasn't loaded yet" />
    </div>
  );
}
