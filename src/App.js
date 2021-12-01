import './App.css';
import React, { useState} from 'react'
import Navigation from './components/Navigation/Navigation'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FacialRecognition from './components/FacialRecognition/FacialRecognition'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import 'tachyons'

const app = new Clarifai.App({
  apiKey: '9e251d6c56a741b3a4ed07ceda8dd84e'
})

function App() {

  const [route, setRoute] = useState('signin')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEntries, setUserEntries] = useState(0);
  const [userJoined, setUserJoined] = useState('');
  const [userId, setUserId] = useState('');
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});

  const particlesOptions = {
    particles: {
      number: {
        value: 8,
        density: {
          enable: true,
          value_area: 100
        }
      }
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setInput('')
    setImageUrl(input)
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => {
        if(response){
            fetch('http://localhost:5000/image', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: userId
                })
            })
            .then(res => res.json())
            .then(result => {
              setUserEntries(result)
            })
            
        }
        displayFaceBox(calculateFaceLocation(response))
        
    })
    .catch(err => console.log(err))
}

const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
    }
}

const displayFaceBox = (box) => {
    setBox(box)
    console.log(box);
}
  const loadUser = (user) => {
    setUserId(user.id);
    setUserName(user.name);
    setUserEmail(user.email);
    // setPassword(user.password);
    setUserEntries(user.entries);
    setUserJoined(user.joined);
    setImageUrl('');
    console.log(user);
    console.log(userName, userEntries);
}


  const handleRouteChange = (route) => {
    if (route === 'signout') {
      setIsSignedIn(false)
    }
    else if (route === 'home') {
      setIsSignedIn(true)
    }
    setRoute(route)
  }

  return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation onRouteChange={handleRouteChange} isSignedIn={isSignedIn} />
        {route === 'home'
          ?
          <div>
            <Logo />
            <Rank userName ={userName} userEntries = {userEntries}/>
            <ImageLinkForm input = {input} handleClick = {handleClick} handleChange = {handleChange}/>
            <FacialRecognition imageUrl = {imageUrl} box = {box}/>
          </div>
          :
          (
            route === 'signin'
              ?
              <Signin onRouteChange={handleRouteChange} loadUser = {loadUser}/>
              :
              <Register onRouteChange={handleRouteChange} loadUser = {loadUser} />
          )
        }
      </div>
  );
}

export default App;
