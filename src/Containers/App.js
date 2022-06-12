import React, { Component } from 'react';
import './App.css';
import Menu from '../Components/Menu'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
          <p>
            Hello World :)
          </p>
        </header>
      </div>
    );
  }
}

export default App;
