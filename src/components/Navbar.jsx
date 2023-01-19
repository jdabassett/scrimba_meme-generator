import React from 'react';
import trollFace from '../images/troll-face.png';


export default function Navbar() {
  return(
    <div className='navbar-container'>
      <div className='navbar-title-container'>
        <img className='navbar-troll-face' src={trollFace} alt="troll face meme" />
        <h1 className='navbar-title'>MemeGenerator</h1>
      </div>
      <h2 className='navbar-sub-title'>React Course - Project 3</h2>
    </div>
  )
}