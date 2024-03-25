// Data.js
import React from 'react';
import './Data.css';
import icon1 from '../images/Frame 65 (3).png';
import icon2 from '../images/Frame 65 (2).png';
import icon3 from '../images/Frame 65 (1).png';
import icon4 from '../images/Frame 65.png';
import arrow from '../images/arrow.png';

function Data() {
  return (
    <>
      <div className="boxes">
        <Box icon={icon1} text="Estadistics" subText1="246" subText2="2.5%" subText3="From last week" />
        <Box icon={icon2} text="Estadistics" subText1="63" subText2="2.9%" subText3="From last week" />
        <Box icon={icon3} text="Estadistics" subText1="246" subText2="2.5%" subText3="From last week" />
        <Box icon={icon4} text="Estadistics" subText1="63" subText2="2.9%" subText3="From last week" />
      </div>
      <div id="horizontal-line2"></div>
    </>
  );
}

function Box({ icon, text, subText1, subText2, subText3 }) {
  return (
    <div className="box">
      <div className="box-header">
        <img src={icon} alt="Icon" className="icon" />
        <div className="text">{text}</div>
      </div>
      <div className="line"></div>
      <div className="sub-texts">
        <div className="sub-text1">{subText1}</div>
        <div className="sub-text2 highlight">{subText2}</div>
        <img src={arrow} alt="↑" className="arrow" />
        <div className="sub-text3">{subText3}</div>
      </div>
    </div>
  );
}

export default Data;