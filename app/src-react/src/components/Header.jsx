// Header.js
import React, { useState } from 'react';
import './Header.css';
import logo from '../images/logo.png';
import face from '../images/face.png';
import tab from '../images/tab.png';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="top-left">
          <img src={logo} alt="Campaign Manager" />
          <div className="campaign-manager">CAMPAIGN MANAGER</div>
        </div>
        <div className="top-right">
          <div className="campaign-manager">Isabella Smith</div>
          <img src={face} alt="" />
          <img src={tab} alt="" onClick={toggleDropdown} />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Option 1</div>
              <div className="dropdown-item">Option 2</div>
              <div className="dropdown-item">Option 3</div>
            </div>
          )}
        </div>
      </div>
      <div id="horizontal-line"></div>
    </div>
  );
}

export default Header;