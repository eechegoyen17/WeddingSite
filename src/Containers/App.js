import React, { Component } from 'react';
import './App.css';
import Menu from '../Components/Menu'
import LeftContent from '../Components/LeftContent';
import RightContent from '../Components/RightContent';

class App extends Component {
  render(){
    return (
      <div className="ContainerBody">
        <div className="header">
          <Menu />
        </div>
        <div className="Content">
          <div className="Wrapper">
            <LeftContent />
            <RightContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
