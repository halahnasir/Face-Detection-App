import React, {createContext, useState} from 'react'
import Clarifai from 'clarifai'

export const Context = createContext();

const app = new Clarifai.App({
    apiKey: '9e251d6c56a741b3a4ed07ceda8dd84e'
})

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        // console.log(input)
        //setInput('')
        setImageUrl(input)
        app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
        .then(
            function(response) {
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
            },
            function(err){
            }
            )
    }

    const values = {
        input,
        setInput,
        imageUrl,
        setImageUrl,
        handleChange,
        handleClick
    }

    return (
        <Context.Provider value = {values}>
           {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
