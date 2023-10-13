import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100%',height:'300px'}}>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>

        <div className="website" style={{width:'400px'}}>
        <h4><i class="fa-solid fa-cloud-arrow-up"></i> Bootstrap</h4>
          Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
          Code licensed MIT, docs CC BY 3.0.
          Currently v5.3.2.
        </div>
        <div className="links d-flex flex-column" >
          <h4>Links</h4>
         <Link to={'/home'}  style={{textDecoration:'none',color:'black'}}> Home</Link>
          <Link to={'/'}  style={{textDecoration:'none',color:'black'}}>Landing Page</Link>
          <Link to={'/watch-history'}  style={{textDecoration:'none',color:'black'}}>Watch History</Link>
          

        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'https://react.dev/'}  style={{textDecoration:'none',color:'black'}}> React</Link>
          <Link to={'https://react-bootstrap.github.io/'}  style={{textDecoration:'none',color:'black'}}>React Bootstrap</Link>
          <Link to={'https://reactrouter.com/en/main'}  style={{textDecoration:'none',color:'black'}}>Routing</Link>
        </div>
        <div className="contact d-flex flex-column flex-wrap">
          <h4>Contact Us</h4>
          <div className="d-flex">
            <input
              className="form-control"
              placeholder="Enter Your Mail"
              type="text"
            />
            <div className="btn btn-primary ms-3">Subscribe</div>
          </div>
          <div className="d-flex justify-content-evenly mt-3 fs-5">
            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i
                className="fa-brands fa-twitter"
                style={{ color: "#f1f4f8" }}
              ></i>
            </Link>
            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>

            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className='mt-3'>Copyright © 2023 Media Player. Built with React.</p>
    </div>
  );
}


      

    
    
      


export default Footer