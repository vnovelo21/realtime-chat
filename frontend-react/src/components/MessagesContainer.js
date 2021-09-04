import React, { Component } from 'react';
import { getMessages } from '../utils/api';

class MessagesContainer extends Component {
  

  state = {
    messages: []
  }

  componentDidMount(){
    
    getMessages().then((response) => {
      console.log(response);
    });
  }
  
  // useEffect(() => {
  //   props.socket.on('chat-message', message => {
  //     setMessages(oldMessages => [...oldMessages, message]);
  //   })
  // });

  render(){
    return (
      <div className="messages-container">
        {this.state.messages.map((messageText, index) => {
          <div key={index} className='message-text'>
            {messageText}
          </div>
        })}
      </div>
    );
  }
}

export default MessagesContainer;