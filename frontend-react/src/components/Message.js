import React, { useEffect, useState } from 'react';

const Message= (props) => {


    useEffect(() => {
        console.log('Message rendered');
      }, []);
  return (
    <div className="message-container-text">
        {props.messageText}
    </div>
  );
}

export default Message;