import './App.css';
import React, {useState} from 'react'
import Navigation from './components/Navigation/Navigation'
import Signin from './components/Signin/Signin'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FacialRecognition from './components/FacialRecognition/FacialRecognition'
import ContextProvider from './components/Context/ContextProvider'
import Particles from 'react-particles-js'

import 'tachyons'

function App() {

  const [route, setRoute] = useState('signin')

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

  const handleRouteChange = (route) => {
    setRoute(route)
  }

  return (
    <ContextProvider>
      <div className="App">
          <Particles className = 'particles'
          params = {particlesOptions} />
          {route === 'signin' 
          ? 
          <Signin onRouteChange = {handleRouteChange}/> 
          :  
          <div>
          <Navigation onRouteChange = {handleRouteChange}/>
          <Logo/>
          <Rank/>
          <ImageLinkForm/>
          <FacialRecognition/>
          </div>}
      </div>
    </ContextProvider>
  );
}

export default App;
