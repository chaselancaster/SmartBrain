import React, { Component } from 'react';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* {
        
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
