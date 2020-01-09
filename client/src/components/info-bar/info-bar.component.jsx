import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.svg';

import './info-bar.styles.scss';

const InfoBar = ({ room }) => (
  <div className="info-bar">
    <div className="left-inner-container">
      <img src={onlineIcon} alt="online icon" className="online-icon" />
      <h3>{room}</h3>
    </div>
    <div className="right-inner-container">
      <a href="/">
        <img src={closeIcon} alt="close" />
      </a>
    </div>
  </div>
);

export default InfoBar;
