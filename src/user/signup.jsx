import React from 'react';
import './signup.css'; // Create a separate CSS file for styles
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup-page">
      <p className="request-text">Signup</p>
      <input className="input-box" type="text" placeholder="First Name" />
      <input className="input-box" type="text" placeholder="Last Name" />
      <input className="input-box" type="text" placeholder="Mobile Number" />
      <input className="input-box" type="email" placeholder="Email" />
      <Link to='/otp'><button className="button1">Get OTP</button></Link>
      <p className="already-user">
        Already have an account? <Link to="/login" className="login">Login here</Link>
        <Link to='/'><button className="close-button" >X</button></Link>
      </p>
    </div>
  );
}

export default Signup;
