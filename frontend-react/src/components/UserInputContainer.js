import React, { useState } from 'react';
import { addMessage } from '../utils/api';

const UserInputContainer = (props) => {

  const [message, setMessage] = useState('');

  const onInputChange = (event) => {
      event.preventDefault();
      setMessage(event.target.value);
  }

  const sendMessage = (e) => {
    e.preventDefault();
    props.socket.emit('send-chat-message', message);
    addMessage(message, props.user);
    setMessage('');
  }
  
  return (
    <form className="user-input-container input-group" onSubmit={sendMessage}>
      <input className="form-control" type="text" value={message} onChange={onInputChange} placeholder="Enter Message To Send"/>
      <button className='btn btn-outline-primary' type="submit">Send</button>
    </form>
  );
}

export default UserInputContainer;