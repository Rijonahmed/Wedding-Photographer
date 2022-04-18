import React from 'react';
import './social.css'
import google from '../../images/social/google.png'
import github from '../../images/social/github2.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
  const navigate = useNavigate()

  let errorElement;

  if (error || errorGithub) {
    errorElement = (
      <div>
        <p className='text-danger w-50 mx-auto'>Error: {error?.message}{error?.message}</p>
      </div>
    );
  }
  if (loading || loadingGithub) {
    return <Loading></Loading>
  }
  if (user || userGithub) {
    navigate('/checkout')

  }
  return (
    <div className=' social '>
      <div className='d-flex align-items-center w-50 mx-auto'>
        <div style={{ height: '1px' }} className='bg-dark w-50'></div>
        <p className='mt-2 px-2'>Or</p>
        <div style={{ height: '1px' }} className='bg-dark w-50'></div>
      </div>

      {errorElement}

      <button
        onClick={() => signInWithGoogle()}
        className='btn btn-light d-block mx-auto w-50 my-2 fst-italic'>
        <img className='mx-2' style={{ width: '30px' }} src={google} alt="" />
        Google Sign In</button>


      <button
        onClick={() => signInWithGithub()}
        className='btn btn-light d-block mx-auto w-50 my-2 fst-italic'>
        <img className='mx-2' style={{ width: '30px' }} src={github} alt="" />
        Github Sign In</button>


    </div>
  );
};

export default Social;