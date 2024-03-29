import React from 'react';
import { useParams } from 'react-router-dom';
import { ServicesData } from '../../Data';
import './CheckOut.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const CheckOut = () => {

  const { serviceId } = useParams()

  const data = ServicesData.filter(name => name.id === serviceId)
  const singleData = (data[0]);
  const { name, price, images, text1, text2, text3, text4, text5, text6, text7 } = singleData;

  const [user] = useAuthState(auth);
  console.log(user)



  return (
    <div className='d-flex justify-content-around'>


      <div>
        <h2 className='text-center'>{name}
        </h2>
        <img className='service-Img' src={images} alt="" />
        <h2>{name}</h2>
        <h5>{price}</h5>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
        <p>{text5}</p>
        <p>{text6}</p>
        <p>{text7}</p>

      </div>
      <div>

        <Form className='mt-5'>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={user.email} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" value={user.displayName
              } />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder='type phone number' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Bangladesh</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>


    </div>
  );
};

export default CheckOut;