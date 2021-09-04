import React, { useState } from 'react';
import { addMessage } from '../utils/api';

const UserInputContainer = (props) => {

  const [message, setMessage] = useState('');

  const onInputChange = (event) => {
      event.preventDefault();
      setMessage(event.target.value);
      console.log(message);
  }

  const sendMessage = () => {
    props.socket.emit('send-chat-message', message);
    console.log(props.user);
    addMessage(message, props.user);
    console.log(`Sent message ${message}`)
    setMessage('');
  }
  
  return (
    <div className="user-input-container">
      <input type="text" value={message} onChange={onInputChange} id="user-input" placeholder="Enter Message To Send" />
      <button className='btn btn-outline-primary'id="user-input-send-button" onClick={sendMessage}>Send</button>
    </div>
  );
}

export default UserInputContainer;