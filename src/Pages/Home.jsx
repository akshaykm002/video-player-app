import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'



function Home() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  return (
    <>
    <div className='container mt-5 mb-5 d-flex align-items-center justify-content-between'>

      <div className='add'><Add setUploadVideoServerResponse={setUploadVideoServerResponse}/></div>
      <Link to={'/watch-history'} style={{textDecoration:'none'}} className='fs-5'>
        Watch History
      </Link>
    </div>
    <Row className='container-fluid w-100'>
      <Col className='all-videos col-lg-8'>
        <h3>All Videos</h3>
        <div className='videos w-100'>
          <View uploadVideoServerResponse={uploadVideoServerResponse}/>
        </div>
      </Col>
      <Col className='category col-lg-3'>
        <Category />
      </Col>

    </Row>
    </>
    
  )
}

export default Home