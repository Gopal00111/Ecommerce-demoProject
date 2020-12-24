import React from 'react'
import {Breadcrumb} from 'react-bootstrap'
import "../components/Header.css"
import {Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div>
            <div>
            <Breadcrumb style={{height:"10px"}}>
            <Breadcrumb.Item>
               <Link to="/">
                   <h4>Home</h4>
               </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                   <h5>ContactUs</h5>
             </Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="border">
                
            </div>
        
             <div className="desc">
                 <div>
                 <h4>Address</h4>
                 </div>
                 <div>
                     <h6>404/406 Luxuria Business Hub, Near VR mall, Surat - Dumas Rd, Surat, Gujarat 494007</h6>
                 </div>
                 <div className="border"></div>
                 <div>
                 <h4>Contact Number</h4>
                 </div>
                 <div>
                     <h6>9444484822</h6>
                 </div>
                 <div className="border"></div>
                 
                 <div>
                 <h4>Email Address</h4>
                 </div>
                 <div>
                     <h6>lanet@gmail.com</h6>
                 </div>
             </div>

        </div>
    )
}

export default ContactUs
