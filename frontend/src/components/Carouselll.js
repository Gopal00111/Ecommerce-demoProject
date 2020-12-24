import React from 'react'

import {Link} from 'react-router-dom'
import {Image,Carousel,Card,Button}  from "react-bootstrap"
import './Header.css';


const Carouselll = () => 
      {
    return (
        <div>
             <div>
        <h4> Top Products</h4>
    </div>
            <Carousel>
                <Carousel.Item>
                    <div className="carItem">
                    <div className="car">
                    <Card className='my-3 p-3 rounded' style={{border:"none"}} style={{height:"350px"}}>
      <Link to={"/product/5fe1881f062b3c65e28e1587"}>
        <Card.Img src="./images/waghbakri.jpg" variant='top'  />
      </Link>

      <Card.Body>
        <Link to="/product/5fe1881f062b3c65e28e1587">
          <Card.Title as='div'>
            <strong>Wagh Bakri Tea</strong>
          </Card.Title>
        </Link>

    

        <Card.Text ><p>Rs. 200</p></Card.Text>
      </Card.Body>
      <div>
        <Link to="/cart/5fe1881f062b3c65e28e1587?qty=1">
        <Button style={{width:"180px"}}>
          Add To Cart
        </Button>
        </Link>
        </div>
    </Card>
                    </div>
                    <div className="car1" style={{height:"320px"}}>
                    <Card className='my-3 p-3 rounded' style={{border:"none"}} style={{height:"350px"}}>
      <Link to={"/product/5fe18a1d062b3c65e28e158b"}>
        <Card.Img src="./images/bnatural.jpg" variant='top'  />
      </Link>

      <Card.Body>
        <Link to="/product/5fe18a1d062b3c65e28e158b">
          <Card.Title as='div'>
            <strong>B Natural Juice</strong>
          </Card.Title>
        </Link>

    

        <Card.Text ><p>Rs. 100 </p></Card.Text>
      </Card.Body>
      <div>
        <Link to="/cart/5fe18a1d062b3c65e28e158b?qty=1">
        <Button style={{width:"180px"}}>
          Add To Cart
        </Button>
        </Link>
        </div>
    </Card>
                    </div>
                    <div className="car1" style={{height:"320px"}}>
                    <Card className='my-3 p-3 rounded' style={{border:"none"}} style={{height:"350px"}}>
      <Link to={"/product/5fe1972f062b3c65e28e1590"}>
        <Card.Img src="./images/thums.jpg" variant='top'  />
      </Link>

      <Card.Body>
        <Link to="/product/5fe1972f062b3c65e28e1590">
          <Card.Title as='div'>
            <strong>Thumbs Up</strong>
          </Card.Title>
        </Link>

    

        <Card.Text ><p>Rs. 90</p></Card.Text>
      </Card.Body>
      <div>
        <Link to="/cart/5fe1972f062b3c65e28e1590?qty=1">
        <Button style={{width:"180px"}}>
          Add To Cart
        </Button>
        </Link>
        </div>
    </Card>
                    </div>
                    <div className="car1" style={{height:"320px"}}>
                    <Card className='my-3 p-3 rounded' style={{border:"none"}} style={{height:"350px"}}>
      <Link to={"/product/5fe19874062b3c65e28e1594"}>
        <Card.Img src="./images/bingo.jpg" variant='top'  />
      </Link>

      <Card.Body>
        <Link to="/product/5fe19874062b3c65e28e1594">
          <Card.Title as='div'>
            <strong>Bingo Achari Masti</strong>
          </Card.Title>
        </Link>

    

        <Card.Text ><p>Rs. 20</p></Card.Text>
      </Card.Body>
      <div>
        <Link to="/cart/5fe19874062b3c65e28e1594?qty=1">
        <Button style={{width:"180px"}}>
          Add To Cart
        </Button>
        </Link>
        </div>
    </Card>
                    </div>
                    
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carItem">
                    <div className="car">
                    <Card className='my-3 p-3 rounded' style={{border:"none"}} style={{height:"350px"}}>
      <Link to={"/product/5fe1998e062b3c65e28e1596"}>
        <Card.Img src="./images/mcain.jpg" variant='top'  />
      </Link>

      <Card.Body>
        <Link to="/product/5fe1998e062b3c65e28e1596">
          <Card.Title as='div'>
            <strong>McCain French Fries</strong>
          </Card.Title>
        </Link>

    

        <Card.Text ><p>Rs. 20</p></Card.Text>
      </Card.Body>
      <div>
        <Link to="/cart/5fe1998e062b3c65e28e1596?qty=1">
        <Button style={{width:"180px"}}>
          Add To Cart
        </Button>
        </Link>
        </div>
    </Card>
                    </div>
                    <div className="car1" style={{height:"320px"}}>
                    <Card className='my-3 p-3 rounded' style={{border:"none"}} style={{height:"350px"}}>
      <Link to={"/product/5fe1a803062b3c65e28e159c"}>
        <Card.Img src="./images/dove.jpg" variant='top'  />
      </Link>

      <Card.Body>
        <Link to="/product/5fe1a803062b3c65e28e159c">
          <Card.Title as='div'>
            <strong>Dove Shampoo</strong>
          </Card.Title>
        </Link>

    

        <Card.Text ><p>Rs. 100</p></Card.Text>
      </Card.Body>
      <div>
        <Link to="/cart/5fe1a803062b3c65e28e159c?qty=1">
        <Button style={{width:"180px"}}>
          Add To Cart
        </Button>
        </Link>
        </div>
    </Card>
                    </div>
                    <div className="car1" style={{height:"320px"}}>
                    <Card className='my-3 p-3 rounded' style={{border:"none"}} style={{height:"350px"}}>
      <Link to={"/product"}>
        <Card.Img src="./images/eight.jpg" variant='top'  />
      </Link>

      <Card.Body>
        <Link to="/products">
          <Card.Title as='div'>
            <strong>Closeup Toothpaste</strong>
          </Card.Title>
        </Link>

    

        <Card.Text ><p>Rs. 150</p></Card.Text>
      </Card.Body>
      <div>
        <Link to="/cart">
        <Button style={{width:"180px"}}>
          Add To Cart
        </Button>
        </Link>
        </div>
    </Card>
                    </div>
                    <div className="car1" style={{height:"320px"}}>
                    <Card className='my-3 p-3 rounded' style={{border:"none"}} style={{height:"350px"}}>
      <Link to={"/product"}>
        <Card.Img src="./images/nine.jpeg" variant='top'  />
      </Link>

      <Card.Body>
        <Link to="/products">
          <Card.Title as='div'>
            <strong>Amul Taaza Milk</strong>
          </Card.Title>
        </Link>

    

        <Card.Text ><p>Rs. 3000</p></Card.Text>
      </Card.Body>
      <div>
        <Link to="/cart">
        <Button style={{width:"180px"}}>
          Add To Cart
        </Button>
        </Link>
        </div>
    </Card>
                    </div>
                    
                    </div>
                </Carousel.Item>
           </Carousel>
        </div>
    )
}

export default Carouselll
