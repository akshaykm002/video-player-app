import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
const navigateByUrl=useNavigate()

const navigate=()=>{
  navigateByUrl('/home')
}

  return (
    <div>

      <Row className='mt-5 mb-5 align-items-center justify-content-between'>

        <Col>   </Col>

        <Col lg={4}>
          <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore iure nostrum magnam mollitia quaerat? Aliquid rerum officia non provident est. Labore facere in eaque totam voluptas eligendi voluptatibus est numquam. </p>
          <button onClick={navigate} className='btn btn-info mt-5 fw-bolder'>Get Started</button>
        </Col>

        <Col> </Col>

        <Col className='ps-5' lg={6}>
          <img style={{ width: '300px' }} className='img-fluid ms-5 ps-5' src="https://media3.giphy.com/media/aOOYQG7V0OL9TCbPJX/giphy.gif?cid=ecf05e47pmd6tmxf9ryfz1u1yd5yexkj2pomjfttciq1lnir&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" />
        </Col>

      </Row>
      {/* cards */}
      <Row className='container mt-5 mb-5 ms-4 d-flex justify-content-center align-items-center flex-column '>
        <h3 className='d-flex justify-content-center'>Features</h3>
        <div className='cards mt-5 d-flex  justify-content-between w-100 align-items-center '>
          <Card className='p-3 ms-5' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media0.giphy.com/media/jQ8sGUX6xYTfchDsCw/200w.webp?cid=ecf05e47irgr1dbhqrqf9kkz5322py3s0lqiheg309o1il6z&ep=v1_stickers_search&rid=200w.webp&ct=s" />
            <Card.Body>
              <Card.Title>managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3 ms-5' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-3 ms-5' style={{ width: '22rem' }}>
            <Card.Img height={'300px'} width={'300px'} variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>


        </div>


      </Row>

      <div className='container mt-5 mb-5 d-flex justify-items-between w-100 border p-5 border-secondary rounded align-items-center'>
        <div className="content">
          <h2 className='text-warning mb-5 fw-900'>Simple ,Fast and powerful</h2>
          <h6><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur eum totam amet consequatur! Qui facilis suscipit vero nostrum, perferendis dolor, distinctio aspernatur velit vel iure harum, similique voluptatum expedita!\ </h6>
          <h6><span className='mt-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur eum totam amet consequatur! Qui facilis suscipit vero nostrum, perferendis dolor, distinctio aspernatur velit vel iure harum, similique voluptatum expedita!\ </h6>
          <h6><span className='mt-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur eum totam amet consequatur! Qui facilis suscipit vero nostrum, perferendis dolor, distinctio aspernatur velit vel iure harum, similique voluptatum expedita!\ </h6>
        </div>

        <div className='video ms-5'>
        <iframe width="674" height="379" src="https://www.youtube.com/embed/Dydmpfo68DA" title="ANIMAL (Official Teaser): Ranbir Kapoor |Rashmika M, Anil K, Bobby D |Sandeep Reddy Vanga |Bhushan K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>



      </div>







    </div>
  )
}

export default LandingPage