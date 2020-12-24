import React from 'react'
import { Link } from 'react-router-dom'
import { Card ,Button} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product}) => {
  return (
    <Card className='my-3 p-3 rounded' style={{border:"none"}}>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h6'>₹{product.price}</Card.Text>
      </Card.Body>
      <div>
        <Link to={`/cart/${product._id}?qty=1`}>
        <Button style={{width:"200px"}}>
          Add To Cart
        </Button>
        </Link>
        </div>
    </Card>
  )
}

export default Product
