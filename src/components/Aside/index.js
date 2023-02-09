import {useState} from 'react'
import {NavLink} from 'react-router-dom'

import {FiMenu} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'

import './index.css'

const Aside = () => {
  const [mobileViewActive, setMobileViewActive] = useState(true)
  console.log(mobileViewActive)
  return(
  <>
  <div className="aside-sec-container">
    <ul className="tabs-lists">
      <NavLink to="/" end className="non-active">
        Dashboard
      </NavLink>
      <NavLink to={"/demo_script"} className="non-active">
        Employee
      </NavLink>
      <NavLink to={"/settings"} className="non-active">
        Attendance
      </NavLink>  
    </ul>
    <hr className="vertical-line" />
  </div>
  <div className='btns-container'>
  <button type='button' className='menu-btn' onClick={()=>setMobileViewActive(true)} ><FiMenu className='menu-icon'/></button>
  </div>
  <div className="aside-sec-container-mobile-view">
    {mobileViewActive &&
    <>
    <div className='mobile-view'>
    
    <ul className="tabs-lists-mobile-view">
      <NavLink to="/" end className="non-active">
        Products
      </NavLink>
      <NavLink to={"/demo_script"} className="non-active">
        Demo Script
      </NavLink>
      <NavLink to={"/customers"} className="non-active">
        Customers
      </NavLink>
      <NavLink to={"/sales_team"} className="non-active">
        Sales Team
      </NavLink>
      <NavLink to={"/demos"} className="non-active">
        Demos
      </NavLink>
      <NavLink to={"/settings"} className="non-active">
        Settings
      </NavLink>  
    </ul>
    <button type='button' className='cross-btn' onClick={()=>setMobileViewActive(false)} ><RxCross2 className='menu-icon'/></button>
    </div>
    </>}  
  </div>
  
  </>
)}

export default Aside