import { useState } from 'react';

import "./LoginPage.css"

function LoginPage(){
    const [isSignedUp, setIsSignedUp] = useState(0);
    if(isSignedUp == 1){
        return(
            <>
            <div id="login-page-container">
                <div id="logo"></div>
                <div id="title">TeamTree</div>
                <div id="login-container">
                    <div id="header">Login</div>
                    <div id="username-container">
                        <div id="username-label">Username</div>
                        <input id="username-input">Enter your Username</input>
                    </div>
                    <div id="password-container">
                        <div id="password-label">Password</div>
                        <input id="password-input">Enter Your Password</input>
                    </div>
                    <div id="submit">Start</div>
                </div>
            </div>
            </>
        )
    }
    else{
        return(
            <>
            <div id="signup-page-container">
                <div id="logo"></div>
                <div id="title">TeamTree</div>
                <div id="signup-container">
                    <div id="header">Sign Up</div>
                    <div id="name-container">
                        <div id="name-label">Name</div>
                        <input id="name-input">Enter Your Name</input>
                    </div>
                    <div id="username-container">
                        <div id="username-label">Username</div>
                        <input id="username-input">Enter Your Username</input>
                    </div>
                    <div id="password-container">
                        <div id="password-label">Password</div>
                        <input id="password-input">Enter Your Password</input>
                    </div>
                    <div id="confirm-container">
                        <div id="confirm-label">Confirm Password</div>
                        <input id="confirm-input">Re Enter Your Password</input>
                    </div>
                    <div id="submit">Start</div>
                </div>
            </div>
            </>
        )
    }
}

export default LoginPage