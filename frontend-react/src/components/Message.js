import React, { useState, useEffect }from 'react';

const Message= (props) => {

    const [leftOrRightMessage, setLeftOrRightMessage] = useState('left');

    useEffect(() => {
        if(props.userId === props.user){
            setLeftOrRightMessage('right');
        }
    }, []);

    return (
    <div className={`message-container ${leftOrRightMessage === 'left' ? 'left' : 'right'}`}>
        <div className="message-container-userid">
            User ID: {props.userId}
        </div>
        <div className="message-container-text">
            {props.messageText}
        </div>
    </div>
);
}

export default Message;