import React, {useState} from 'react'

const Signin = ({onRouteChange, loadUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       fetch('http://localhost:5000/signin', {
           method: 'post',
           headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
           body: JSON.stringify({
               email: email,
               password: password
           })
       }).catch(err => console.log(err))
        .then(res => res.json())
        .then(user => {
            if(user.id){
                onRouteChange('home')
                loadUser(user)
            }
        })
        setEmail('');
        setPassword('');
        
    }

    return (
        <article className="br3 ba dark-gray b--black-10 mv6 shadow-5 w-100 w-50-m w-25-l pt3 mv6 center">
            <form className="pa4 black-80" onSubmit = {handleSubmit} method = 'post' action = 'http://localhost:5000/signin'>
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                        <div className ="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" 
                            id="email-address"
                            value = {email}
                            onChange = {handleEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" 
                            value = {password}
                            onChange = {handlePasswordChange}/>
                        </div>
                    </fieldset>
                    <div className="center">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" 
                        type="submit" 
                        value="Sign in"
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick = {() => onRouteChange('register')} 
                        className="center f6 link dim black db pointer">
                            Register
                        </p>
                    </div>
                </div>
            </form>
      </article>
      
    )
}

export default Signin
