// Bottom.js
import React from 'react';
import './Bottom.css';
import logo from '../images/logo.png';
import name from '../images/webLogo.png';
import text from '../images/webLogo2.png';

function Bottom() {
  return (
    <div className="bottom-container">
      <hr className="horiLine" />
      <div className="bottom-content">
        <img src={logo} alt="Logo" className="logo" />
        <div className="name">
          <img src={name} alt="Name" className="name" />
        </div>
        <div className="slogan">
          <img src={text} alt="Slogan" className="slogan" />
        </div>
      </div>
      <div className="bottom-right">
        <a href="#" className="help-link">Help</a>
        <a href="#" className="privacy-link">Privacy & Terms</a>
      </div>
    </div>
  );
}

export default Bottom;