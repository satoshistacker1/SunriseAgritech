import { useState } from 'react';
import './login.css'; // Make sure you include your CSS file
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="login-page">
        <p className="request-text">Login</p>
        <input className="box1" type="text" placeholder="Enter Email" />
        <input className="box2" type="text" placeholder="Enter Phone Number" />
        <Link to='/otp'><button className="button1">Get OTP</button></Link>
        <Link to='/'><button className="close-button" >X</button></Link>
        <p className="new-user">
          New User? <Link to="/signup" className="signup-link">Signup here</Link>
        </p>
      </div>

    </>
  );
}




export default Login
