import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';

const LogIn = () => {
  return (
    <div>
      <h2 className='text-primary text-center mt-3'>Please Log In</h2>
      <Form className='w-50 mx-auto mt-3'>
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

      <Social></Social>

    </div>
  );
};

export default LogIn;