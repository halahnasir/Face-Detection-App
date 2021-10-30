import React from 'react'
import Tilt from 'react-parallax-tilt'
import logoImage from '../../images/brain.png'

const Logo = () => {
    return (
        <div className = 'ma4 mt0'>
            <Tilt className = ' Tilt'>
                <img className = 'logo' src = {logoImage} alt = 'logo' height = '100px' width = '100px'/>
            </Tilt>
         </div>
    )
}

export default Logo