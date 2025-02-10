import { useState } from 'react';
import './otp.css';
import { Link } from 'react-router-dom';

function Otp () {
  return (
    <>
    <div className='otp-page'>
      <p className='enter-otp'>Enter OTP</p>
      <p className='otp-message'>Verification code sent!</p>
      <input className="box1" type='text' placeholder='Enter Your 4 Digit OTP'/>
      <Link to='/'><button className='button1'>Verify Otp</button></Link>
      <p className='resend-otp'>Didn't Receive OTP? Resend.</p>
      <Link to='/'><button className="close-button" >X</button></Link>
    </div>
    </>
  );
}

export default Otp