import React from 'react';

const Message= (props) => {

  return (
    <div className="message-container">
        <div className="message-container-user">
            {props.userId}
        </div>
        <div className="message-container-text">
            {props.messageText}
        </div>
    </div>
  );
}

export default Message;