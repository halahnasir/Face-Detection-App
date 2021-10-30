import React, {createContext, useState} from 'react'
import Clarifai from 'clarifai'

export const Context = createContext();

const app = new Clarifai.App({
    apiKey: '9e251d6c56a741b3a4ed07ceda8dd84e'
})

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const [box, setBox] = useState({})
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        // console.log(input)
        //setInput('')
        setImageUrl(input)
        app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
        .then(response => displayFaceBox(calculateFaceLocation(response)))
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

    const values = {
        input,
        setInput,
        imageUrl,
        setImageUrl,
        handleChange,
        handleClick,
        box
    }

    return (
        <Context.Provider value = {values}>
           {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
