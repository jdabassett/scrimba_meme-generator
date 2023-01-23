import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
// import memesData from "../memesData.js";

export default function MainContent() {
  //meme object
  const [meme, setMeme] = React.useState({
    topText: "top text",
    bottomText: "bottom text",
    randomImage: "https://i.imgflip.com/3si4.jpg",
    width: 500,
    height: 281,
    fontSize: 20,
  });

  //meme styling dimensions
  let stylesDimensions = {
    width: meme.width,
    height: meme.height,
  };

  let stylesFontSize = {
    fontSize: `${meme.fontSize}px`,
  };

  //array of memes
  const [allMemeImages, setAllMemeImages] = React.useState({});

  //function to update text as it is typed
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  //function to change meme image
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

  //import meme data from api
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data));
  }, []);

  //elements to render
  return (
    <div className="mainContent-container">
      <form className="main-form-container">
        <div className="main-input-container">
          <input
            className="main-input main-text"
            type="text"
            placeholder="top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          ></input>
          <input
            className="main-input main-text"
            type="text"
            placeholder="bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
        </div>
        <div className="main-input-slider-container">
          <label
            htmlFor="input-text-size"
            className="main-text main-input-slider-title"
          >
            text size
          </label>
          <input
            className="main-input-slider"
            type="range"
            min={10}
            max={50}
            step={2.5}
            name="fontSize"
            value={meme.fontSize}
            id="input-text-size"
            onChange={handleChange}
          ></input>
        </div>

        <button className="main-button main-text" onClick={handlerMemeImage}>
          get a new meme image
          <FontAwesomeIcon
            className="button-icon"
            icon={faImage}
          ></FontAwesomeIcon>
        </button>
      </form>
      {/* <div className="main-meme-container"></div> */}
      <div style={stylesDimensions} className="main-meme-container">
        <img
          className="main-meme"
          src={meme.randomImage}
          alt="Meme hasn't loaded, click the button above."
        />
        <h2 style={stylesFontSize} className="main-meme-text top">
          {meme.topText}
        </h2>
        <h2 style={stylesFontSize} className="main-meme-text bottom">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
}
