import React from 'react'

const Navigation = ({onRouteChange}) => {
    return (
        <div>
            
            <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
                <p className = 'fa3 link dim black underline pa3 pointer'
                    onClick = {() => onRouteChange('signin')}
                >
                    Sign Out
                </p>
            </nav>
        </div>
    )
}

export default Navigation