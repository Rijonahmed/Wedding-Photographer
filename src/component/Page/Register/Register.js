
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';

const Register = () => {
  const [displayName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,

    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading></Loading>
  }


  const navigateHandleLogin = () => {
    navigate('/login');

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    navigate('/home')

  }
  let errorElement;
  if (updateError || error) {
    errorElement = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }






  return (
    <div>
      <h2 className='text-primary text-center mt-3'>Please Register Now</h2>
      <Form onSubmit={handleSubmit} className='w-50 mx-auto mt-3'>
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
        </Form.Group>

        <Button className='w-100' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {errorElement}
      <p className='text-center'>Already Creat account  <span className='text-primary cursor-style' onClick={navigateHandleLogin}> Log In</span></p>
      <Social></Social>

    </div>
  );
};

export default Register;