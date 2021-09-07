import React, { useEffect, useState } from 'react';
import { getMessages } from '../utils/api';
import Message from './Message';

const MessagesContainer = (props) => {

  const [messages, setMessages] = useState([]);

  // On initial render
  useEffect(() => {
    // Gets all the messages
    getMessages();

    props.socket.on('subscribeToTx', (newMessages) => {
      setMessages(newMessages)
    })
  }, []);

  // After "messages" updates
  useEffect(() => {
    // Scroll to bottom when a new message comes in
    let messagesContainer = document.querySelector('.messages-container');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;;
  }, [messages]);
  

  return (
    <div className="messages-container">
       {messages && messages.map((message, index) => {
        return <Message key={index} className='p-2' messageText={message.messageText} userId={message.userId} user={props.user}></Message>;
      })}
    </div>
  );
}

export default MessagesContainer;