import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col,Row } from 'react-bootstrap';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import './MoreDetails.css'

function MoreDetails() {
  const [docData, setdocData] = useState({})

    const {id} = useParams();
    console.log(id);

    const base_url='https://doctors-backend-tpjz.onrender.com/doctors'

    const fetchDoc = async () => {
        const result=await axios.get(`${base_url}/${id}`)
        setdocData(result.data);
        console.log(result.data);
    }

console.log(docData);
    useEffect(() => {
        fetchDoc()
    }, [])
  return (
    <div className='new'>
      <Row>
        <Col className='m-5' >
        <MDBCard alignment='center' >
      
      <MDBCardBody className='m-5'>
        <img src="https://th.bing.com/th/id/OIP.Lbsbt8CA5M6-1lypd7JjogHaFG?w=680&h=468&rs=1&pid=ImgDetMain" style={{height:"130px"}} alt="" />
        
        <MDBCardTitle style={{color:'#3c92de', fontWeight:'1000',fontSize:'30px'}}>{docData.hospital}</MDBCardTitle>
        <MDBCardText style={{color:'black'}}>{docData.name} ({docData.specialty})
        <br/>Phone : {docData.phone}
        </MDBCardText>
        
        
      </MDBCardBody>
      
    </MDBCard>
        </Col>


        <Col className='text-center m-5 py-5' style={{color:'white', backgroundColor:'rgba(0,0,0,0.7)', borderRadius:'15px'}}>
        Address : {docData.address}<br/><br/>
        Available Days : {docData.available_days}<br/><br/>
        Available time : {docData.available_hours}<br/><br/>
        Email : {docData.email}
        </Col>
        
      </Row>
      <h1 className='text-center'>Reviews</h1>

      <Row className='px-5' style={{opacity:"90%"}}>
        
        {
          docData.reviews?.map(item=>(
            
            <Card className='my-4' body><h5>{item.patient_name}</h5>
            <h6>({item.date})</h6>
            Rating: <i class="fa-solid text-warning fa-star "></i>{item.rating}<br/><br/>
            <p> Comments: <br />
            {item.comments}</p>
            </Card>
    
          ))
        }
      </Row>
    </div>
  )
}

export default MoreDetails


