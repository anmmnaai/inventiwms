// Buttons.js
import React from 'react';
import { Link } from 'react-router-dom'
import './Buttons.css';
import b1 from '../images/createCamp.png';
import b2 from '../images/setStatus.png';
import b3 from '../images/trash.png';

function Buttons() {
  const handleClick = (buttonId) => {
    // Handle button click based on buttonId
  };

  return (
    <div className="button-container">
      <Link to="/createCampaign">
        <img src={b1} alt="Create Campaign" onClick={() => handleClick(1)} />
        </Link>
      <img src={b2} alt="Set Status" onClick={() => handleClick(2)} />
      <img src={b3} alt="Trash" onClick={() => handleClick(3)} />
    </div>
  );
}

export default Buttons;