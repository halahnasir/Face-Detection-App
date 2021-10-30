import React from 'react'


const Navigation = ({onRouteChange, isSignedIn}) => {
    
    return (
        <div>
        {isSignedIn ?  
            <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
                <p className = 'fa3 link dim black underline pa3 pointer'
                    onClick = {() => onRouteChange('signout')}
                >
                    Sign Out
                </p>
            </nav>
        : 
        <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
            <p className = 'fa3 link dim black underline pa3 pointer'
                onClick = {() => onRouteChange('signin')}
            >
                Sign In
            </p>
            <p className = 'fa3 link dim black underline pa3 pointer'
                onClick = {() => onRouteChange('register')}
            >
                Register
            </p>
        </nav>
        }
        </div>
    )
}

export default Navigation