import React, { useState } from 'react'
import './Login.css';
import SignupScreen from './SignupScreen';
function Login() {
    const[ signIn, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginBackground">
                <img 
                className="loginScreenLogo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt=""
                 />
                 <button 
                 className='loginScreenButton'> 
                 Sign In
                 </button>
            <div className="loginScreenGradient" /> 

         </div>   
        <div className="loginScreenBody"> 
        {signIn ? ( 
            <SignupScreen />
        ) : ( 
            <>
                <h1> Unlimited films, TV programmes and much more.</h1>
                <h2> Watch Anywhere, Cancel at any time.</h2>
                <h3> Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="loginScreenInput">
                <form> 
                    <input type="email"
                    placeholder="Email Address"
                    />
                    <button
                    onClick={ () => setSignIn(true)}
                    className="loginScreenGetStarted">
                        GET STARTED
                    </button>
                </form>
            </div>
            </>
        )}
            
         </div>
        </div>
    );
}

export default Login
