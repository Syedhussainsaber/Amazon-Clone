import {getAuth,createUserWithEmailAndPassword,signInWithPhoneNumber,RecaptchaVerifier} from "firebase/auth"
import {app} from "../firebaseConfig"
import { auth } from "../firebaseConfig"
import {toast} from "react-toastify"


export const handleRegister = (data)=>{
const auth = getAuth(app)
createUserWithEmailAndPassword(auth,data.email,data.password)
.then((res)=>{
console.log(res)
})
.catch((err)=>{
console.log(err)
})
}

const renderRecaptcha = (formatPh, setShowOtp)=>{
    if(!window.recaptchaVerifier){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        onSignInSubmit(formatPh, setShowOtp);
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    }, auth);
    }
    }


export const onSignInSubmit =(phoneNumber,setShowOtp)=>{
        const formatPh = "+" + phoneNumber
      renderRecaptcha(formatPh, setShowOtp)
      
      const appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(auth,formatPh,appVerifier).then((confirmationResult)=>{
      window.confirmationResult = confirmationResult
        console.log(confirmationResult) 
        toast.success("OTP Sent Successfully")
      setShowOtp(true)
            })
        .catch((err)=>{
        console.log(err)
        toast.error("Could not Send the OTP")
        })
        
      }
      
    export  const otpVerify = ()=>{
        window.confirmationResult.confirm(otp).then((res)=>{
        console.log(res)
toast.success("OTP Verified Successfully")
        })
        .catch((err)=>{
        console.log(err)
        })
        }

// export const amazonApi = async (setData)=>{

//   try{
//   //  const url = "https://fakestoreapi.com/products"
//   const url = `https://fakestoreapi.com/products`
//     const response = await fetch(url);
// const data= await response.json()

// setData(data)

//   }
//   catch(err){
//     console.log(err)
//   }
// }
  