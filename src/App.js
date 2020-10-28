import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';
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
    imageUrl: '',
    box: {},
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  calculateFaceLocation = (data) => {

  }

  onButtonSubmit = (evnt) => {
    this.setState({imageUrl: this.state.input})
    console.log('click')
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input, 
      {language: 'zh'})
      .then(response => this.calculateFaceLocation(response))
      .catch(error => console.log(error));
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
    ````<FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }

}

export default App;
