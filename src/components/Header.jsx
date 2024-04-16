import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src="https://th.bing.com/th/id/OIP.zozvUUvD02QucYPrUlSnlgHaJP?rs=1&pid=ImgDetMain" style={{height:"40px",width:"40px"}} alt="" />
            Medicos Center
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header