import React, { Component } from 'react';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles 
              params={particlesOptions}
            />
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
