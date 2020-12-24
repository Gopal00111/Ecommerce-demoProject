import React from 'react'
import {Breadcrumb} from 'react-bootstrap'
import "../components/Header.css"
import {Link } from 'react-router-dom'
 const AboutUs = () => {
    return (
        <div>
            <div className="bread">
            <Breadcrumb style={{height:"10px"}}>
            <Breadcrumb.Item>
               <Link to="/">
                   <h5>Home</h5>
               </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                   <h5>About Us</h5>
             </Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="border">
                
            </div>
            <div className="sample">
                    <p>Sample Store</p>    
             </div>
             <div className="desc">
                 <p>Thanks so much for visiting our online store. Our team is excited to provide you with an impeccable online shopping experience and remains available to assist at any time. If you have questions, comments or concerns about your order or the content found within this website, please feel free to contact us via telephone or email and one of our experienced team members will get back to you right away.  Again, thanks for visiting our store and we look forward to serving you in the future.  </p>
             </div>

            
        </div>
    )
}

export default AboutUs
