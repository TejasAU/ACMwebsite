import React, {useState} from 'react'
import style from "./Navbar.css"
// import logo from 'src/logo(2).png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <img src="https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png" className="App-logo" alt="logo" />
              {/* <Link to="/" className="navbar-logo">
              <i className='logoACM'>https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png</i>
              </Link> */}
              <div className = 'navigate'>
                <ul class = "navList">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              {/* <h1>test</h1> */}
            </div>
        </nav>
    </>
  )
}

export default Navbar