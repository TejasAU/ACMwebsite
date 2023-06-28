import React, { useState } from 'react'
import style from "./Face_1.css"
import {useRef} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from 'react-bootstrap-icons';

// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';

function Face_1() {
  // let message = "lorem ipsum"
  return (
    <>
      <div class='Symbi_Img'>
        <div className='backImg'>
        <img src="https://www.sitpune.edu.in/index/assets/images/HC4A0654.jpg" class="img-fluid" alt="Symbiosis" style={{ width: 100 + '%' }}>
        </img>
        </div>
        <div class='Opening_txt'>
          "lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip"
        </div>
      </div>

      {/* <div class='crousel_a'>
        <div class='head'>
          <h2>ABOUT US</h2>
        </div>
        <div class='content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </div>
      </div>
      

      <div class='crousel_a'>
        <div class='head'>
          <h2>ABOUT ACM</h2>
        </div>
        <div class='content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </div>
      </div> */}


      {/* <div class='crousel_a'>
        <div class='head'>
          <h2>OUR IDEOLOGIES</h2>
        </div>
        <div class='content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </div>
      </div> */}
      
      {/* <div class="Gal">
        <h2>GALLERY</h2>
      </div>
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.sitpune.edu.in/assets/images/labs/computer/open_source_technology_lab.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.sitpune.edu.in/assets/images/labs/computer/cloud_computing.jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.sitpune.edu.in/assets/images/labs/computer/Analytics.jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel> */}
    {/* <section className='section-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2 className='section-title'>The Team Behind ACM</h2>
            <p className='section-subtitle'>
              {message}
            </p>
          </div>
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://imagizer.imageshack.com/img922/678/CW1JNG.jpg" className='team-img' alt='pic' />
              <h3>Sudeep Sahu</h3>
              <div className='team-info'>
                <p>Head of ACM</p>
                <p>Sudeep is awesome and bla bla bla bla</p>
                <ul className='team-icon'>
                  <li>
                    <a href="#" className="twitter"> */}
                    {/* Replace with linkedin later */}
                      {/* <i className="fa fa-twitter"> </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://imagizer.imageshack.com/img924/6608/cCkVtp.jpg" className='team-img' alt='pic' />
              <h3>Chahak Sengar</h3>
              <div className='team-info'>
                <p>Head of ACM</p>
                <p>Sudeep is awesome and bla bla bla bla</p>
                <ul className='team-icon'>
                  <li>
                    <a href="#" className="twitter"> */}
                    {/* Replace with linkedin later */}
                      {/* <i class="bi bi-linkedin"> </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>
              <img src="https://imagizer.imageshack.com/img923/7446/HwfBkn.jpg" className='team-img' alt='pic' />
              <h3>Yash Jugade</h3>
              <div className='team-info'>
                <p>Head of ACM</p>
                <p>Sudeep is awesome and bla bla bla bla</p>
                <ul className='team-icon'>
                  <li>
                    <a href="#" className="twitter"> */}
                    {/* Replace with linkedin later */}
                      {/* <i className="fa fa-twitter"> </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* <h1>TEST</h1> */}
    </>
    
  )
}

export default Face_1