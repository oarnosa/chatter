import React from 'react';

import './input.styles.scss';

const Input = ({ message, sendMessage, setMessage }) => (
  <form className="form">
    <input
      type="text"
      className="input"
      placeholder="Type a message..."
      value={message}
      onChange={event => setMessage(event.target.value)}
      onKeyPress={event => (event.key === 'Enter' ? sendMessage(event) : null)}
    />
    <button className="send-button" onClick={event => sendMessage(event)}>
      <strong>Send</strong>
    </button>
  </form>
);

export default Input;
