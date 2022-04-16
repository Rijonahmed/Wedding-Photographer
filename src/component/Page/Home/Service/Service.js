import React from 'react';
import { Link, } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
  const { name, price, images } = service

  return (
    <div className='service'>
      <h2>{name}</h2>
      <p>{price}</p>
      <img src={images} alt="" />
      <br />
      <Link to='/checkout'>
        <button className='btn btn-primary'>Please Check Out{name}</button>
      </Link>

    </div>
  );
};

export default Service;