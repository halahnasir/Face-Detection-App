import React, {useContext} from 'react'
import '../../styles/ImageLinkForm.css'
import {Context} from '../Context/ContextProvider'
// import Clarifai from 'clarifai'

// const app = new Clarifai.App({
//     apiKey: '9e251d6c56a741b3a4ed07ceda8dd84e'
// })

const ImageLinkForm = () => {

    const {input, handleClick, handleChange} = useContext(Context)

    return (
        <div>
            <p className = 'fa3 tc'>This Magic Brain will detect faces in your pictures. Give it a try.</p>
            <div className = 'container'>
                <div className = 'form pa4 br3 shadow-5' >
                    <input className = 'f4 pa2 fl w-70 center'
                        type = 'text'
                        placeholder = 'Enter URL of the image.'
                        value = {input}
                        onChange = {handleChange}
                />
                    <button className = ' grow f4 link ph3 pv2 dib white  bg-light-purple fl w-30 center m0' onClick = {handleClick} >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm 