import React from 'react'
import {Image} from 'react-router-bootstrap'
import '../components/Header.css'
import {Link} from 'react-router-dom'

const AdvertiseOne= () => {
    return (
        <div className="advertise">
            <Link to="/products/cat/Hygiene">
            <div>
               <img src="/images/hygene.jpg"/>
            </div>
            </Link>
           <Link to="products/cat/Immunity">
           <div>
                <img src="/images/immunity.jpg"/>
            </div>
           </Link>
         
        </div>
    )
}

export default AdvertiseOne
