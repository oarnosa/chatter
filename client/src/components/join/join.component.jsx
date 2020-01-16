import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './join.styles.scss';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading">Chatter</h1>
        <div>
          <input
            type="text"
            className="join-input"
            placeholder="Name"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="join-input mt-20"
            placeholder="Room"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={event => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            <strong>Join the Conversation</strong>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
