import React from 'react'
import '../../styles/FacialRecognition.css'

const FacialRecognition = ({imageUrl, box}) => {

    const style = {
        top: box.topRow,
        right: box.rightCol,
        bottom: box.bottomRow,
        left: box.leftCol
    }

    return (
        <div className = 'container ma'>
            <div className = 'absolute mt1'>
                <img id = 'inputImage' src = {imageUrl} alt = '' width = '400px' height = 'auto'/>
                <div className = 'bounding-box' style = {style}></div>
            </div>
        </div>
    )
}

export default FacialRecognition
