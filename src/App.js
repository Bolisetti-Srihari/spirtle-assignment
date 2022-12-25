import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers"
import "./App.css"

const intialState={
  isSignUp:"inSignUp",
  isLogin:"inLogin",
  isSuccess:"inSuccess"
}

function App() {
  const [imgUrl, setImgUrl] = useState("")
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


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"))
    }
  }, [])

  const handleImageChange = (e) => {
    setImgUrl(e.target.value)
    window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
  }

  const renderPasswordField = () => {
    
    return (
      <>
        <label className="input-label" htmlFor="password">
          Phone NUmber
        </label>
        <input
        onChange={onLoginPhoneNumber}
          type="text"
          id="password"
          className="password-input-filed"
          placeholder="Contact"
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
  const getProfile=()=>{
    const stringifiedDetails=localStorage.getItem("person_details")
    const normalPesonDetails=JSON.parse(stringifiedDetails)
    const {email}=normalPesonDetails
    const firstLetter=email.slice(0,1)
    return(
        <div className="email-first-letter-order">
            <button className="first-letter-button" type="button">{firstLetter.toUpperCase()}</button>
            <p>{email}</p>
        </div>
    )
  }


  const onSuccess=()=>
    (
    <>
    <div className="App">
    <div className="profile-order">
    {getProfile()}
    </div>
   <h1>React sliding puzzle</h1>
   <Board imgUrl={imgUrl} />
   <input value={imgUrl} onChange={handleImageChange} />
 </div></>

  )

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
    <div className="header">
        <img
          src="https://cotaglobal.com/wp-content/uploads/2017/06/products-httpwholesalepuzzlesandsouvenirs.comhighresimages20154422.jpg"
          alt="puzzle"
          className="puzzle-image"
        />
        <button onClick={onLoginSignInButton} className="login-button" type="button">
          Sign Up/Create
        </button>
      </div>

     <div className="login-form-container">
      <h1 className="login-heading">Spritle Login</h1>
    <form className="form-container" onSubmit={onLoginButton}>
    <div className="input-container">{renderUsernameField()}</div>
    <div className="input-container">{renderPasswordField()}</div>
    <button type="submit" className="login-button">
      Login
    </button>
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

export default App;