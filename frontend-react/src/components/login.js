import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/login'

class Login extends Component {

  state = {
    email: '',
  }

  onClick = (ev) => {
    ev.preventDefault();

    const { loginUser } = this.props;

    // Ignore submits if empty
    if (this.state.email === '') return null;

    // Get the user 
    loginUser(this.state.email)
      .then((response) => {
        this.props.setUserId( response.user.user.id)
        console.log('success');
      })
  }

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({ 'email': event.target.value })
  }



  render() {
    return (
      <div className="container">
        <h5>Login</h5>
        <input type="email" value={this.state.email} onChange={(email) => this.onInputChange(email)} className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
        <br />
        <button className='btn btn-outline-primary' onClick={this.onClick} >Login</button>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email) => dispatch(loginUser(email)),
  }
}

export default connect(null, mapDispatchToProps)(Login);