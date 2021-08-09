import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Carousel } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'


import { listCategoryProducts } from '../actions/productActions'

import '../components/Header.css'

const CategoryScreen = ({ match }) => {
  const category= match.params.category



  const dispatch = useDispatch()

  const productCategory = useSelector((state) => state.productCategory)
  const { loading, error, products} = productCategory

  useEffect(() => {
    dispatch(listCategoryProducts(category))
  }, [dispatch, category])

  return (
    <div>
   
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      
      <h4>{products.category}</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div>
  
          <Row>
         
            {products && products.map((product) => (
                 
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
         
                <Product product={product} />
              
      
              </Col>
          
            ))}
          
          </Row>
      
      
       
        </div>
      )}
    </div>
  )
}

export default CategoryScreen
