import React, { Component } from 'react';
import './App.css';
import Signin from '../Components/SignIn/SignIn';
import Menu from '../Components/Menu'
import LeftContent from '../Components/LeftContent';
import RightContent from '../Components/RightContent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  onRouteChange = (route) =>{
    this.setState({
      route: route,
      imageUrl: '',
      box: {}
    });
  }

  render(){
    return (
      <>
        { this.state.route === 'signin'
          ?
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :
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
        }
      </>
    );
  }
}

export default App;
