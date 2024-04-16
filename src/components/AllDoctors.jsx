import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import DocCard from './DocCard'

function AllDoctors() {


    const base_url='https://doctors-backend-tpjz.onrender.com/doctors'

    //to hold array of data
    const [AllDocData,setAllDocData] = useState([])

    //api fetching
    const fetchData=async()=>{
        const result = await axios.get(base_url)
        console.log(result.data);//array of data
        setAllDocData(result.data)
    }
    console.log(AllDocData);
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='neww'>
        <Row>
            {
                AllDocData.map(item=>(
                    <Col sm={12} md={6} lg={4} xl={3}>
                    <DocCard doctors={item}/>
                    </Col>
                ))
            }
        </Row>
    </div>
  )
}

export default AllDoctors