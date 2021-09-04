import React, { useEffect, useState } from 'react';
import { getMessages } from '../utils/api';

const MessagesContainer = (props) => {
  
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    props.socket.on('chat-message', message => {
      setMessages(oldMessages => [...oldMessages, message]);
    })
  });

  return (
    <div className="messages-container">
      {messages.map((messageText, index) => {
        <div key={index} className='message-text'>
          {messageText}
        </div>
      })}
    </div>

  );
}

export default MessagesContainer;