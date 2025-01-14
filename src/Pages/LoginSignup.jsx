import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
      </div>
      <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email' />
        <input type="password" placeholder='Your password' />
      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already have an account ? <span>Login here</span> </p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='name'/>
        <p>By continuing , I agree to the terms of use & privacy policy </p>
      </div>
    </div>
    <hr />
    </>
    
  )
}

export default LoginSignup;
