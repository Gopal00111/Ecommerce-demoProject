import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Header.css'

const Footer = () => {
  return (
    
        <div className="footer-body">
          <div className="cate">
            <h5 style={{color:"black"}}>Categories</h5>
            <Link to="/products/cat/Dairy">
            <h6>Dairy</h6>
            </Link>
            <Link to="/products/cat/Personal">
            <h6>Personal Care</h6>
            </Link>
            <Link to="/products/cat/Homecare">
            <h6>Home Care</h6>
            </Link>
            <Link to="/products/cat/Shampoo">
            <h6>Shampoo</h6>
            </Link>
            <Link>
            <h6>Beverages</h6>
            </Link>
          </div>
          <div className="footer">
            <Link to="/aboutus" style={{color:"black"}}>
          <div className="about">
             <h6 style={{color:"black"}}>About Us</h6>
          </div>
          </Link>
          <Link to="/contactus" style={{color:"black"}}>
          <div className="contact">
              <h6 style={{color:"black"}}>Contact Us</h6>
          </div>
          </Link>
          <Link to="/daily"  style={{color:"black"}}>
          <div className="daily">
             <h6 style={{color:"black"}}>Daily News</h6>
          </div> 
          </Link>
          <Link to="/terms"  style={{color:"black"}}>    
         <div className="terms">
           <h6 style={{color:"black"}}>Terms and Conditions</h6>
         </div>
         </Link>
       </div>
       <div className="copy">
       <Row>
          <Col style={{color:"black"}} className='text-center py-3'>Copyright &copy; Amazon-Mart</Col>
        </Row>
       </div>
            
          </div>)
       
  
}

export default Footer
