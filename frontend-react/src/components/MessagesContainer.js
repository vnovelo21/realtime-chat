import React, { useEffect, useState } from 'react';
import { getMessages } from '../utils/api';
import Message from './Message';
const MessagesContainer = (props) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
  }, []);

  useEffect(() => {
    props.socket.on('subscribeToTx', (newMessages) => {
      console.log(newMessages);
      setMessages(newMessages)
    })
  }, []);

  return (
    <div className="messages-container">
       {messages && messages.map((message, index) => {
        return <Message key={index} className='p-2' messageText={message.messageText} userId={message.userId}></Message>;
      })}
    </div>
  );
}

export default MessagesContainer;