import React from 'react'
import '../../styles/ImageLinkForm.css'

const ImageLinkForm = ({input, handleClick, handleChange}) => {
    return (
        <div>
            <p className = 'fa3 tc'>This Magic Brain will detect faces in your pictures. Give it a try.</p>
            <div className = 'container'>
                <div className = 'form pa3 br3 shadow-5' >
                    <input className = 'f5 pa2 fl w-80 center'
                        type = 'text'
                        placeholder = 'Enter URL of the image.'
                        value = {input}
                        onChange = {handleChange}
                />
                    <button className = ' grow f5 link ph3 pv2 dib white bg-light-purple fl w-20 center m0' onClick = {handleClick} >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm 