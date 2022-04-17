import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  const navigate = useNavigate();
  const navigateHandleLogin = () => {
    navigate('/login');

  }

  if (user) {
    navigate('/');
  }
  const handleNameBlur = e => {
    setName(e.target.value);
  }
  const handleEmailBlur = e => {
    setEmail(e.target.value);
  }
  const handlePasswordBlur = e => {
    setpassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password);

  }






  return (
    <div>
      <h2 className='text-primary text-center mt-3'>Please Register Now</h2>
      <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-3'>
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className='w-100' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className='text-center'>Already Creat account  <span className='text-primary cursor-style' onClick={navigateHandleLogin}> Log In</span></p>
      <Social></Social>

    </div>
  );
};

export default Register;