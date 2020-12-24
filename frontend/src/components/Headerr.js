import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Headerr = () => {
    return (
        <div className="Headerr">
            <div className="fruit"> 
                <Link to="/products/cat/Fruit">
                <p>Fruits</p>
                </Link>
            </div>
            <div className="beverages">
            <Link to="/products/cat/Beverages">
                <p>Beverages</p>
                </Link>
            </div>
            <div className="snacks">
            <Link to="/products/cat/Snacks">
                <p>snacks</p>
                </Link>
            </div>
            <div className="personal">
            <Link to="/products/cat/Personal">
                <p>Personal Care</p>
                </Link>
            </div>
            <div className="home">
            <Link to="/products/cat/Homecare">
                <p>Home Care</p>
                </Link>
            </div>
        </div>
    )
}

export default Headerr
