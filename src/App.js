import './App.css';
import React, {useState} from 'react'
import Navigation from './components/Navigation/Navigation'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FacialRecognition from './components/FacialRecognition/FacialRecognition'
import ContextProvider from './components/Context/ContextProvider'
import Particles from 'react-particles-js'

import 'tachyons'

function App() {

  const [route, setRoute] = useState('signin')
  const [isSignedIn, setIsSignedIn] = useState(false)

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
    if(route === 'signout'){
      setIsSignedIn(false)
    }
    else if(route === 'home')
    {
      setIsSignedIn(true)
    }
    setRoute(route)
  }

  return (
    <ContextProvider>
      <div className="App">
          <Particles className = 'particles'
          params = {particlesOptions} />
         <Navigation onRouteChange = {handleRouteChange} isSignedIn = {isSignedIn}/>
          {route === 'home' 
          ? 
          <div>
             
              
              <Logo/>
              <Rank/>
              <ImageLinkForm/>
              <FacialRecognition/>
          </div>
          : 
          (
            route === 'signin'
            ?
            <Signin onRouteChange = {handleRouteChange}/> 
            :
            <Register onRouteChange = {handleRouteChange}/>
          ) 
          }
      </div>
    </ContextProvider>
  );
}

export default App;
