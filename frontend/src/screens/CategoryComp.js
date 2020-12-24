import React from 'react'
import { Card,Form } from 'react-bootstrap'
import '../components/Header.css'

const CategoryComp = () => {
    return (
        <div className="side">
            <Card style={{width:"250px"}}>
                <Card.Body>
                    <Card.Title>
                       <h4> Filters</h4>
                    </Card.Title>
                    <div className="border"></div>
                    <div>
                        <h5>Availibility</h5>
                        <Form>
                        <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="InStock Products" /> 
  </Form.Group>
                        </Form>
                    </div>
                    <div className="categoryComp">
                    <div>
                        <h5>Categories</h5>
                    </div>
                
                  <div>
                  <Form>
                        <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Dairy" /> 
  </Form.Group>
  <div className="border"></div>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Fruits" /> 
  </Form.Group>
  <div className="border"></div>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Beverages" /> 
  </Form.Group>
  <div className="border"></div>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Snacks" /> 
  </Form.Group>
  <div className="border"></div>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Personal Care" /> 
  </Form.Group>
  <div className="border"></div>
                        </Form>
                  </div>

                  </div>
                  <div className="brandComp">
                  <div>
                        <h5>Brand</h5>
                    </div>
               
                  <div>
                  <Form>
                        <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Amul" /> 
  </Form.Group>
  <div className="border"></div>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Nestle" /> 
  </Form.Group>
  <div className="border"></div>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Parle-G" /> 
  </Form.Group>
  <div className="border"></div>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Sunfeast" /> 
  </Form.Group>
  <div className="border"></div>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Hersheys" /> 
  </Form.Group>

                        </Form>
                  </div>
                  </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CategoryComp
