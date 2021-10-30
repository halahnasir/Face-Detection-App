import React, {useContext} from 'react'
import {Context} from '../Context/ContextProvider'
import '../../styles/FacialRecognition.css'

const FacialRecognition = () => {

    const {imageUrl} = useContext(Context)
    const {box} = useContext(Context)

    // const style = {
    //     top: box.topRow,
    //     right: box.rightCol,
    //     bottom: box.bottomRow,
    //     left: box.leftCol
    // }

    return (
        <div className = 'container ma'>
            <div className = 'absolute mt1'>
                <img id = 'inputImage' src = {imageUrl} alt = '' width = '400px' height = 'auto'/>
                <div className = 'bounding-box' style = {{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FacialRecognition
