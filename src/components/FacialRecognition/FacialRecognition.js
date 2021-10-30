import React, {useContext} from 'react'
import {Context} from '../Context/ContextProvider'

const FacialRecognition = () => {

    const {imageUrl} = useContext(Context)

    return (
        <div className = 'container ma'>
            <div className = 'absolute mt1'>
                <img src = {imageUrl} alt = '' width = '400px' height = 'auto'/>
            </div>
        </div>
    )
}

export default FacialRecognition
