import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Social from '../Social/Social';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './Login.css'


const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }
  const handleLogIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  const navigateHandle = event => {
    navigate('/register');
  }

  return (
    <div>
      <h2 className='text-primary text-center mt-3'>Please Log In</h2>
      <Form onSubmit={handleLogIn} className='w-50 mx-auto mt-3'>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className='w-100' variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <p className='w-50 mx-auto text-center'>New To Best Wedding PhotoGrapher <span className='text-primary cursor-style' onClick={navigateHandle}> New Creat Account</span></p>

      <Social></Social>

    </div>
  );
};

export default LogIn;