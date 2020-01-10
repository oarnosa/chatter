import React from 'react';

import onlineIcon from '../../icons/onlineIcon.svg';

import './lobby.styles.scss';

const Lobby = ({ users }) => (
  <div className="text-container">
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="active-container">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="active-item">
                <img alt="Online Icon" src={onlineIcon} />
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default Lobby;
