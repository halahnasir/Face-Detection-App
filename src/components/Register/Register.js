import React, {useState} from 'react'

const Register = ({onRouteChange, loadUser}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(user => {
            if(user){
                loadUser(user)
                onRouteChange('home');
            }
        })
    }

    return (
        <article style = {{overflow: 'hidden'}} className="br3 ba dark-gray b--black-10 mv5 shadow-5 w-100 w-50-m w-25-l pt3 mv4 center">
            <form className="pa4 black-80" onSubmit = {handleSubmit} method = 'post' action = 'http://localhost:5000/register'>
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0 center">Register</legend>
                        <div className ="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name"  
                            id="name"
                            value = {name}
                            onChange = {(e) => setName(e.target.value) }/>
                        </div>
                        <div className ="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}/>
                        </div>
                    </fieldset>
                    <div className="center">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" 
                        type="submit" 
                        value="Register"
                        // onClick = {() => onRouteChange('home')}
                        />
                        <p className = 'center f6 black db'>Already have an account?</p>
                        <p onClick = {() => onRouteChange('signin')} 
                        className="center f6 link dim black db pointer">Sign In</p>
                    </div>
                </div>
            </form>
  </article>
  
)
}
export default Register
