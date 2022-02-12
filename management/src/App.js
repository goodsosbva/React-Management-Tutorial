import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
  return (
      <div className="gray-background">
        <img src={logo} lat="logo" />
        <h2>Lets`s develop mamagement system!</h2>
      </div>
    );
  }
}

export default App;
