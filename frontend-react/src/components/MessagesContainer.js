import React, { useEffect, useState } from 'react';
import { getMessages } from '../utils/api';
import Message from './Message';
const MessagesContainer = (props) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
    .then((response) => {
      setMessages(response.data)
    });
  }, []);

  useEffect(() => {
    props.socket.on('connnection', () => {
      console.log('connected to server');
    })

    props.socket.on('message-added', (newMessages) => {
      console.log('message-added');
      console.log(newMessages);
      setMessages(newMessages)
    })

    props.socket.on('disconnect', () => {
      console.log('Socket disconnecting');
    })

  }, []);

  return (
    <div className="d-flex flex-column ">
       {messages && messages.map((message, index) => {
        return <Message key={index} className='p-2' messageText={message.messageText}></Message>;
      })}
    </div>
  );
}

export default MessagesContainer;