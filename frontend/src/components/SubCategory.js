import React from 'react'
import {Card,Row,Col}  from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Header.css'

const SubCategory = () => {
    return (
        <div className="cat">
        <div>
        <h4>Shop from Top Categories</h4>
    </div>
    
            <div className="category">
             
       
                    <div >
                <Card  style={{border:"none"}}> 
                <Card.Body>
                    <Link to="/products/cat/Dairy">
                    <Card.Img src="./images/Dairy.jpg"/>
                    </Link>
                   
                </Card.Body>
            </Card>
            </div>
            <div className="shampoo">
            <Card style={{border:"none"}} >
                <Card.Body>
                    <Link to="/products/cat/Shampoo">
                    <Card.Img src="./images/Shampoo.jpg"/>
                    </Link>
                    
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{border:"none"}} >
                <Card.Body>
                    <Link to="/products/cat/Tea">
                    <Card.Img src="./images/Tea.jpg"/>
                    </Link>
                    
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{border:"none"}}>
                <Card.Body>
                    <Link to="/products/cat/Biscuit">
                    <Card.Img src="./images/Biscuit.jpg"/>
                    </Link>
                   
                </Card.Body>
            </Card>
            </div>
            </div>
            </div>
            
        
    )
}

export default SubCategory
