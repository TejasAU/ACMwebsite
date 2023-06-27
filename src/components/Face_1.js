import React, { useState } from 'react'
import style from "./Face_1.css"

function Face_1() {
  return (
    <>
      <div class='Symbi_Img'>
        <img src="https://www.sitpune.edu.in/index/assets/images/HC4A0654.jpg" class="img-fluid" alt="Symbiosis" style={{ width: 100 + '%' }}>
        </img>
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
          <h2>ABOUT</h2>
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

      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.sitpune.edu.in/assets/images/labs/computer/cloud_computing.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.sitpune.edu.in/assets/images/labs/computer/open_source_technology_lab.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.sitpune.edu.in/assets/images/labs/computer/Analytics.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Face_1