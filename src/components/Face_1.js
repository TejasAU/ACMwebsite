import React, { useState } from 'react'
import style from "./Face_1.css"

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Face_1() {
  return (
    <>
      <div class='Symbi_Img'>
        <div className='backImg'>
        <img src="https://www.sitpune.edu.in/index/assets/images/HC4A0654.jpg" class="img-fluid" alt="Symbiosis" style={{ width: 100 + '%' }}>
        </img>
        </div>
        <div class='Opening_txt'>
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </div>

        <div class="gradfill">

        </div>
        
      </div>

      <div class='crousel_a'>
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
      </div>


      <div class='crousel_a'>
        <div class='head'>
          <h2>OUR IDEOLOGIES</h2>
        </div>
        <div class='content'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </div>
      </div>
      
      <div class="Gal">
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
    </MDBCarousel>
    </>
  )
}

export default Face_1