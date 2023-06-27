import React, {useState} from 'react'
import style from "./Navbar.css"
// import logo from 'src/logo(2).png'
// import { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  const [fix , setFix]=useState(false)
  function setFixed(){
    if(window.scrollY>=100){
      setFix(true)
    }else{
      setFix(false)
    }
  }
  window.addEventListener("scroll",setFixed)
  return (
    <>
        <nav className='navbar'>
              <img src="https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png" className="App-logo" alt="logo" />
              {/* <Link to="/" className="navbar-logo">
              <i className='logoACM'>https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png</i>
              </Link> */}
              <div className = 'navigate'>
                <ul class = "navList">
                  <li>Home</li>
                  <li>About</li>
                  <li>Team</li>
                  <li>Events</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              {/* <h1>test</h1> */}
            
        </nav>
    </>
  )
}

export default Navbar