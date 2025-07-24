import React, { useState } from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {

  const [state, setState] = useState("Login");

  const [formData, setFormData] =useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler =(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }


  // 1. Signup Process: When the user signs up, a token is generated and stored in localStorage. This token is used to keep the user logged in.
  // 2.Login Process: When the user logs in, a new token is generated and replaces any existing token in localStorage.

  const login= async()=>{
    console.log("login", formData)
    let responseData;

    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        "Accept":'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }



  const signup= async()=>{
    console.log("signup", formData)
    let responseData;

    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        "Accept":'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>{state}</h2>
        <div className="loginsignup-fields">
          {state==="Sign Up" ? <input type="text" placeholder='Your Name' name='username' value={formData.username}  onChange={changeHandler}/> :<></>}
          <input type="email" placeholder='Email Address' name='email' value={formData.email}  onChange={changeHandler} />
          <input type="password" placeholder='Password' name='password' value={formData.password}  onChange={changeHandler}/>
        </div>
        <button onClick={()=>{state==="Login" ? login() : signup()}}>Continue</button>
        {state==="Sign Up" ? 
        <p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p> : 
        <p className='loginsignup-login'>Create an account <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        }
        
        

        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
