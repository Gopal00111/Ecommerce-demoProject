import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import './Header.css'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <div className="caresol">
    <Carousel pause='hover'  className='bg-dark' style={{width:"1280px"}} >
 
        <Carousel.Item >
          <Link to="/products/cat/Biscuit">
             <Image src="./images/caresol1.jpg" />
          </Link>
        </Carousel.Item>
        <Carousel.Item >
          <Link to="/products/cat/Snacks">
             <Image src="./images/caresol2.jpg" />
          </Link>
        </Carousel.Item>
        <Carousel.Item >
          <Link to="/products/cat/Vaseline">
             <Image src="./images/caresol3.jpg" />
          </Link>
        </Carousel.Item>
   
    </Carousel>
    </div>
  )
}

export default ProductCarousel
