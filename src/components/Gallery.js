import React, { useState } from 'react'
import style from "./Face_1.css"
import "bootstrap/dist/css/bootstrap.min.css";

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
function Gallery(){
    return(
    <>
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

export default Gallery