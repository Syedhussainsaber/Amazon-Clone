import React from 'react'
import { useState } from 'react'
import "react-phone-input-2/lib/style.css";
import OtpInput from "react18-input-otp"

import PhoneInput from "react-phone-input-2";
import {onSignInSubmit, otpVerify} from "../apis/Authentication.js"
// import {signInWithPhoneNumber,RecaptchaVerifier} from "firebase/auth"

const RegisterComponent = () => {
const [data,setData] = useState({})
const [showOtp, setShowOtp] = useState(false)
const [otp, setOtp] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")

const handleNumber = (number)=>{
setPhoneNumber(number)
}

const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
}

return (
<>
   <div className="registerContainer">
<img src="./amazon-logo2.png" alt="Amazon" width={"130"} height={"80"} />
<div id="recaptcha-container"></div>

<div className="registerComponent">
  <h2>Create account </h2>
<div className="form">
<label>Your Name</label>
<input type="text" placeholder='First and last name'  onChange={(event)=> setData({...data,name:event.target.value})} />

<label>Mobile number or email</label>

{/* <input type='tel'  onChange={(event)=> setPhoneNumber(event.target.value)} /> */}
{showOtp?
<>
  <OtpInput  otpType="number" numInputs={6} id="otpCode" value={otp} onChange={handleChange} />
<button onClick={()=>{otpVerify(otp)}}>Verify</button>
</>
:
<>
  <PhoneInput country={"in"} value={phoneNumber} onChange={handleNumber}/>
  <button onClick={()=>{onSignInSubmit(phoneNumber,setShowOtp)}}>Send Verification Code</button>
  </>
}




<label>Password</label>
<input type='password' placeholder='At least 6 characters' onChange={(event)=> setData({...data,password:event.target.value}) } />

<label>Re-enter password</label>
<input type='password' onChange={(event)=> setData({...data,confirmPassword:event.target.value}) }  />

<input type="submit" onClick={(e) =>{

otpVerify()
  // handleRegister(data)
  // handlePhoneRegister(data,setConfirmationResult)
} } value={"Continue"} className='submitBtn' />
</div>
<p>By creating an account, you agree to Amazon's <span>Conditions of Use</span> and <span >Privacy Notice.</span>
</p>
<p>
Already have an account? <span>Sign in </span>Buying for work? <span>Create a free business account</span>
</p>
</div>
   </div>
   </>
  )
}

export default RegisterComponent
