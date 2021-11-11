import React, {useState} from 'react'

const Signin = ({onRouteChange}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitSignIn = () => {
        console.log(email, password);
        onRouteChange('home')
    }

    return (
        <article className="br3 ba dark-gray b--black-10 mv6 shadow-5 w-100 w-50-m w-25-l pt3 mv6 center">
            <div className="pa4 black-80">
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                        <div className ="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba 
                            b--black bg-transparent hover-bg-dark-pink hover-white w-100" type="email" name="email-address"  id="email-address"
                            value = {email}
                            onChange = {onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba 
                            b--black bg-transparent hover-bg-dark-pink hover-white w-100" type="password" name="password"  id="password" 
                            value = {password}
                            onChange = {onPasswordChange}/>
                        </div>
                    </fieldset>
                    <div className="center">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" 
                        type="submit" 
                        value="Sign in"
                        onClick = {onSubmitSignIn}
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick = {() => onRouteChange('register')} className="center f6 link dim black db pointer">Register</p>
                    </div>
                </div>
            </div>
      </article>
      
    )
}

export default Signin
