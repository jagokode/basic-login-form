import React, { Component } from 'react';
import LoginForm from './LoginForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Login Form</h1>
        <LoginForm />
      </div>
    );
  }
}

export default App;
