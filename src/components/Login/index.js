import React, { useState } from "react";
import emailjs from "emailjs-com"

import Home from "../Home";

import "./index.css"
const intialState={
  isSignUp:"inSignUp",
  isLogin:"inLogin",
  isSuccess:"inSuccess"
}

function Login() {
  
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [address, setAddress] = useState("")
  const [loginEmail,setLoginEmail]=useState("")
  const [loginPhoneNumber,setLoginPhoneNUmber]=useState("")
  const [status,setStatus]=useState(intialState.isLogin)
  const [inLoginEmpty,setLoginEmpty]=useState(false)
  const [inSignInEmpty,setSignInEmpty]=useState(false)

  const onLoginEmail=(event)=>{
    event.preventDefault()
    setLoginEmail(event.target.value)
  }

  const onLoginPhoneNumber=(event)=>{
    event.preventDefault()
    setLoginPhoneNUmber(event.target.value)
  }

  const onSignEmail=(event)=>{
    setEmail(event.target.value)
  }

  const onSignContact=(event)=>{
    setPhoneNumber(event.target.value)
  }

  const onSignDateOfBirth=(event)=>{
    setDateOfBirth(event.target.value)
  }

  const onSignAddress=(event)=>{
    setAddress(event.target.value)
  }


  

  

  const renderPasswordField = () => {
    
    return (
      <>
        <label className="input-label" htmlFor="password">
          Phone Number
        </label>
        <input
        onChange={onLoginPhoneNumber}
          
          type="text"
          id="password"
          className="password-input-filed"
          placeholder="contact"
        />
      </>
    )
  }

  const renderUsernameField = () => {
    
    return (
      <>
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
        onChange={onLoginEmail}
      
          type="text"
          id="email"
          className="username-input-filed"
          placeholder="Enter Email"
          
        />
      </>
    )
  }
 


  const onSuccess=()=>{
    return <Home/>
  }

  const onLoginButton=(event)=>{
    event.preventDefault()
    const getStringifiedPersonDetails=localStorage.getItem("person_details")
    const normalPesonDetails=JSON.parse(getStringifiedPersonDetails)
    const {email,phoneNumber}=normalPesonDetails
    if (loginEmail==="" && loginPhoneNumber===""){
      setLoginEmpty(true)
    }
    if (loginEmail===email && loginPhoneNumber===phoneNumber){
      setStatus(intialState.isSuccess)
    }else{
     setLoginEmpty(true)
      
    }
  }

  const onLoginSignInButton=()=>{
    setStatus(intialState.isSignUp)
  }

  const loginPage=()=>(
    <>
     <div className="login-form-container">
      <h1 className="login-heading">Palnesto Business Solutions PVT Login</h1>
    <form className="form-container" onSubmit={onLoginButton}>
    <div className="input-container">{renderUsernameField()}</div>
    <div className="input-container">{renderPasswordField()}</div>
    <div>
      
    </div>
    <button type="submit" className="login-button">
      Login
    </button>
    <div>
        <button onClick={onLoginSignInButton} className="login-button" type="button">
          Sign Up/Create
        </button>
      </div>
    {inLoginEmpty?<p className="error-message">Enter A valid details</p>:null}
  </form>
  </div>
  </>
  )

  const signRenderPhoneNumberField = () => (
    <>
      <label className="input-label" htmlFor="password">
        Contact
      </label>
      <input onChange={onSignContact} placeholder="Contact" type="text" id="password" className="password-input-filed" />
    </>
  )
  const signRenderEmailField = () => (
    <>
      <label className="input-label" htmlFor="email">
        Email
      </label>
      <input onChange={onSignEmail} placeholder="Email" type="text" id="email" className="username-input-filed" />
    </>
  )

  const signRenderDateOfBirthField = () => (
    <>
      <label className="input-label" htmlFor="date">
        Date Of Birth
      </label>
      <input onChange={onSignDateOfBirth} placeholder="Date Of Birth" type="date" id="date" className="username-input-filed" />
    </>
  )

  const signRenderAddressField = () => (
    <>
      <label className="input-label" htmlFor="address">
        Address
      </label>
      <textarea
      onChange={onSignAddress}
        cols="50"
        rows="8"
        id="address"
        placeholder="Address"
        className="username-input-filed"
      />
    </>
  )

  const onSignUpButton=(event)=>{
    event.preventDefault()
     
    emailjs.sendForm('service_yfxlefl', 'template_ozkny73', event.target, 'dh1A_DZq9MJxnkjm0')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    event.target.reset()



    if (email==="" && phoneNumber==="" && dateOfBirth==="" && address===""){
      setSignInEmpty(true)
    }else{
      const personDetails={
        email,
        phoneNumber,
        dateOfBirth,
        address
      }
      const stringifiedDetails=JSON.stringify(personDetails)
      localStorage.setItem("person_details",stringifiedDetails)
      setEmail("")
      setPhoneNumber("")
      setDateOfBirth("")
      setAddress("")
      setStatus(intialState.isLogin)

    }
    
    
  }


  const signUp=()=>(
    <div className="login-form-container">
      <h1 className="you-should">You Should SignUp First</h1>
        <form className="form-container" onSubmit={onSignUpButton}>
          <h1>Spritle Puzzle SignUp </h1>
          <div className="input-container">{signRenderEmailField()}</div>
          <div className="input-container">{signRenderPhoneNumberField()}</div>
          <div className="input-container">{signRenderDateOfBirthField()}</div>
          <div className="input-container">{signRenderAddressField()}</div>
          <button type="submit" className="login-button">
            SignUp
          </button>
          {inSignInEmpty?<p className="error-message">Please Enter details</p>:null}
        </form>
      </div>
  )

  const getresults=()=>{
    switch(status){
      case intialState.isLogin:
        return loginPage()
      case intialState.isSignUp:
        return signUp()
      case intialState.isSuccess:
        return onSuccess()
      default:
        return null
    }
  }

  return (
    <div>
    {getresults()}
    
    </div>
  )
}

export default Login;