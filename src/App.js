import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Header/> 
            <TeslaBattery/>
        </header>
      </div>
    );
  }
}

export default App;
