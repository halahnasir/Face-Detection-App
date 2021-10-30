import './App.css';
import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FacialRecognition from './components/FacialRecognition/FacialRecognition'
import ContextProvider from './components/Context/ContextProvider'
import Particles from 'react-particles-js'

import 'tachyons'

function App() {

  const particlesOptions = {
    particles: {
      number: {
        value : 8,
        density: {
          enable: true,
          value_area: 100
        }
      }
    }
  }

  return (
    <ContextProvider>
      <div className="App">
          <Particles className = 'particles'
          params = {particlesOptions} />
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkForm/>
          <FacialRecognition/> 
      </div>
    </ContextProvider>
  );
}

export default App;
