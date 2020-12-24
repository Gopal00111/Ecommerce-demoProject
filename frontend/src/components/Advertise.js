import React from 'react'
import {Link} from 'react-router-dom'
import {Image} from 'react-router-bootstrap'
import '../components/Header.css'

const Advertise = () => {
    return (
        <div className="advertise">
                <Link to="/products/cat/Odonil">
                <div>
               <img src="/images/Odonil.jpg"/>
            </div>
                </Link>
          
            <Link to="/products/cat/Colgate">
            <div>
                <img src="/images/Colgate.jpg"/>
            </div>
            </Link>
          
        </div>
    )
}

export default Advertise
