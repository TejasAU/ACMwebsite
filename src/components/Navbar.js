import React, { useState } from 'react'
// import {useRef} from 'react';
import style from "./Navbar.css"
import Face_1 from './Face_1.js';
import About_us from './About_us.js';
import Gallery from './Gallery.js';
import Our_Team from './ACM_team.js';
// import logo from 'src/logo(2).png'
// import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [color, setColor] = useState(false)
  function changeColor() {
    if (window.scrollY <= 910) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor)
  return (
    <>
      <nav className={color ? 'navbar fixed-top' : 'navbar-changed fixed-top'}>
              
              <a href='#' className='App-logo'><img src="https://imagizer.imageshack.com/img923/4372/6Pl6Bz.png" className='img' alt='logo' /></a>
              
              <div className = 'navigate'>
                {/* <ul class = "navList">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Gallery</li>
                  <li>Our Team</li>
                  <li>Events</li>
                  <li>Contact Us</li>
                </ul> */}
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading1">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading2">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading3">Gallery</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading4">Our team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading5">Events</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading6">Contact Us</a>
                  </li>
                </ul>
              </div>
        </nav>

      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
        <h4 id="scrollspyHeading1"> </h4>
        <Face_1/>
        <h4 id="scrollspyHeading2"> </h4>
        <About_us />
        <h4 id="scrollspyHeading3"> </h4>
        <Gallery/>
        <h4 id="scrollspyHeading4"> </h4>
        <Our_Team/>
        <h4 id="scrollspyHeading5"> </h4>
        {/* <p>...</p> */}
      </div>
    </>
  )
}

export default Navbar