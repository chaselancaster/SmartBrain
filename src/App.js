import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'e52d5db9034c450695838793e70e0d03'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {

  state = {
    input: '',
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = (evnt) => {
    console.log('click')
    app.models.predict(Clarifai.GENERAL_MODEL, "https://samples.clarifai.com/metro-north.jpg", {language: 'zh'}).then(
      function(response) {
        // do something with response
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' 
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* {
        
        <FaceRecognition />} */}
      </div>
    );
  }

}

export default App;
