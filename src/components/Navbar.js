import React, {useState} from 'react'
// import {useRef} from 'react';
import style from "./Navbar.css"
// import logo from 'src/logo(2).png'
// import { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {


  const [color , setColor]=useState(false)
  function changeColor(){
    if(window.scrollY <= 910){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener("scroll",changeColor)
  return (
    <>
        <nav className={color ? 'navbar fixed-top' : 'navbar-changed fixed-top'}>
              <img src="https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png" className="App-logo" alt="logo" />
              {/* <Link to="/" className="navbar-logo">
              <i className='logoACM'>https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png</i>
              </Link> */}
              <div className = 'navigate'>
                <ul class = "navList">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Gallery</li>
                  <li>Our Team</li>
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