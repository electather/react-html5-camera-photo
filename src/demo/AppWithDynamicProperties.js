import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from '../lib';
import './reset.css';

class App extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      idealFacingMode: FACING_MODES.ENVIRONMENT
    };
  }
  onTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  onCameraError (error) {
    console.error('onCameraError', error);
  }

  onCameraStart (stream) {
    console.log('onCameraStart');
  }

  onCameraStop () {
    console.log('onCameraStop');
  }

  render () {
    return (
      <div className="App">
        <button onClick={(e) => {
          // dynamic properties is : idealFacingMode, idealResolution, isMaxResolution
          this.setState({idealFacingMode: FACING_MODES.USER});
        }}> FACING_MODE.USER </button>
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          onCameraError = { (error) => { this.onCameraError(error); } }
          idealFacingMode = {this.state.idealFacingMode}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.97}
          isMaxResolution = {false}
          isImageMirror = {false}
          sizeFactor = {1}
          onCameraStart = { (stream) => { this.onCameraStart(stream); } }
          onCameraStop = { () => { this.onCameraStop(); } }
        />
      </div>
    );
  }
}

export default App;
