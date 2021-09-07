import React, { useEffect, useState } from 'react';
import { getMessages } from '../utils/api';
import Message from './Message';

const MessagesContainer = (props) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(props.user);
    getMessages()
  }, []);

  useEffect(() => {
    props.socket.on('subscribeToTx', (newMessages) => {
      setMessages(newMessages)
    })
  }, []);

  return (
    <div className="messages-container">
       {messages && messages.map((message, index) => {
        return <Message key={index} className='p-2' messageText={message.messageText} userId={message.userId} user={props.user}></Message>;
      })}
    </div>
  );
}

export default MessagesContainer;