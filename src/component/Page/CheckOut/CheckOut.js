import React from 'react';
import { useParams } from 'react-router-dom';


const CheckOut = () => {
  const { serviceId } = useParams()
  return (
    <div >
      <h2 className='text-center'>Welcome to Check Out Page.
        <br />

        {serviceId}

      </h2>

    </div>
  );
};

export default CheckOut;