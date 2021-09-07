import React, { Component } from 'react';
import io from 'socket.io-client';

// Components
import Login from './components/login';
import UserInputContainer from './components/UserInputContainer';
import MessagesContainer from './components/MessagesContainer';

const socket = io('http://localhost:18000', {
  withCredentials: true
});


class App extends Component {

  state = {
    user: undefined
  }

  setUserId = (userId) => {
    this.setState({
      user: userId
    })
  }
  
  render() { 
    return (
      (this.state.user === undefined) ? 
      <Login setUserId={this.setUserId}/> : 
      <div id='app'>
        <MessagesContainer socket={socket} user={this.state.user}></MessagesContainer>
        <UserInputContainer socket={socket} user={this.state.user}></UserInputContainer>
      </div>
    );
  }
}

export default App;
