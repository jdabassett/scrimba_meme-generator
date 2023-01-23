import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
// import meme from "../images/sutmm.webp";
import memesData from "../memesData.js";

export default function MainContent() {
  const [meme, setMeme] = React.useState({
    topText: "shut up",
    bottomText: "and take my money!",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    width: 568,
    height: 335,
  });

  let styles = {
    width: meme.width,
    height: meme.height,
  };

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function handlerMemeImage(event) {
    event.preventDefault();
    const memesArray = allMemeImages.data.memes;
    let index = Math.floor(Math.random() * memesArray.length);
    const memeCurrent = memesArray[index];
    const url = memeCurrent.url;
    const width = memeCurrent.width;
    const height = memeCurrent.height;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      width: width,
      height: height,
    }));
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
      <div style={styles} className="main-meme-container">
        <img
          className="main-meme"
          src={meme.randomImage}
          alt="Meme hasn't loaded, click the button above."
        />
        <h2 className="main-meme-text top">{meme.topText}</h2>
        <h2 className="main-meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
