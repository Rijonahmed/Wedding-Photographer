import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css'

const Service = ({ service }) => {
  const { name, price, images, text1, text2, text3, text4, text5, text6, text7 } = service;


  return (
    <div className='service'>
      <img src={images} alt="" />
      <h2>{name}</h2>
      <h5>{price}</h5>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{text4}</p>
      <p>{text5}</p>
      <p>{text6}</p>
      <p>{text7}</p>

      <br />



      <Link to='/checkout'>

        <button className='btn btn-primary'>Check Out : {name}</button>
      </Link>


    </div>
  );
};

export default Service;