import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Social from '../Social/Social';

const Register = () => {
  const navigate = useNavigate
  const navigateHandleLogin = event => {
    navigate('/login');


  }
  return (
    <div>
      <h2 className='text-primary text-center mt-3'>Please Register Now</h2>
      <Form className='w-50 mx-auto mt-3'>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className='w-100' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className='text-center'>Already creat account purbachal club <span className='text-success ' onClick={navigateHandleLogin}> Log In</span></p>
      <Social></Social>

    </div>
  );
};

export default Register;