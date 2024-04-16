import React from 'react'
import './DocCard.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function DocCard({doctors}) {
    console.log(doctors);
  return (
    
    <div className='ad'>
      <div className="comtainer">
      <MDBCard className='my-4 mx-3' style={{opacity:'80%'}}>
      <MDBCardBody>
        <MDBCardTitle className='text-center'>{doctors.hospital}</MDBCardTitle>
        <MDBCardText className='text-center'>
        <i class="fa-solid fa-user-doctor">  {doctors.name}
        </i>
        </MDBCardText>
        <MDBCardText className='text-center'>
        <i class="fa-solid text-warning fa-star"></i>
            {doctors.rating}
        </MDBCardText>
        <div className='text-center'>
        <Link to={`view/${doctors.id}`}>
        <MDBBtn> More Details </MDBBtn>

        </Link>
          

        </div>
      </MDBCardBody>
    </MDBCard>
      </div>

    </div>
  )
}

export default DocCard