import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Contact_us() {
    return(
        <>
        <div className="Contact">
            Testing contact us
        </div>
        <MDBRow className='w-100'>
      <MDBCol lg='6' className='my-4'>
        <iframe
          src='https://www.google.com/maps/place/Symbiosis+Institute+of+Technology+%7C+SIT+Pune/@18.5413032,73.7252788,17z/data=!3m2!4b1!5s0x3bc2bc3e17ba75db:0xd4233857960260a3!4m6!3m5!1s0x3bc2bc3e3d28683b:0x64a3e9ef22f676a0!8m2!3d18.5413032!4d73.7278537!16s%2Fg%2F1260l_1l_?entry=ttu'
          className='w-100'
          height='400'
          loading='lazy'
        ></iframe>
      </MDBCol>
      <MDBCol lg='6' className='my-4 d-flex align-items-center'>
        <div>
          <h6>This map is embedded in a 6 column layout</h6>
          <p>
            Try to resize your browser window - you will see that it starts to take up 12 columns on screens
            smaller than 992px.
          </p>
          <p>
            This useful feature helps to make your embedded map responsive (<strong>mobile friendly</strong>).
            You can customize responsive behavior with the use of{' '}
            <a href='https://mdbootstrap.com/docs/react/layout/breakpoints/'>breakpoints</a>.
          </p>
          <p>
            This text looks so nice because it's <strong>vertically centered</strong> you can achieve this
            effect using the{' '}
            <a href='https://mdbootstrap.com/docs/react/layout/vertical-alignment/'>vertical alignment</a>{' '}
            layout option.
          </p>
        </div>
      </MDBCol>
    </MDBRow>
        </>
    )
}

export default Contact_us;