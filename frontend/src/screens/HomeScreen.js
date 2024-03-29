import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Carousel } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import Headerr from '../components/Headerr'
import SubCategory from '../components/SubCategory'
import '../components/Header.css'
import Carouselll from '../components/Carouselll'
import Advertise from '../components/Advertise'
import AdvertiseOne from '../components/AdvertiseOne'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <div>
      <Meta />
      {!keyword ? (
        <div>
          
        <div >
        <Headerr/>
        </div>
        <div>
        <ProductCarousel />
        </div>
        <div>
        <SubCategory />
        </div>
        <div>
            <Carouselll/>
        </div>
         <div className="advertise">
            <Advertise/>
        </div> 
        <div className="add">
            <AdvertiseOne/>
        </div> 
        </div>
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <div className="lat">
      <h4>Latest Products</h4>
      </div>
      
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className="prooo">
  
          <Row>
         
            {products.map((product) => (
                 
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
         
                <Product product={product} />
              
      
              </Col>
          
            ))}
          
          </Row>
      
      
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </div>
      )}
    </div>
  )
}

export default HomeScreen
