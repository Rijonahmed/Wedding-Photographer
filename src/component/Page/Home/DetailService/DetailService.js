import React from 'react';
import { useParams } from 'react-router-dom';

const DetailService = () => {
  const { serviceId } = useParams()
  console.log(serviceId)
  return (
    <div>
      <h1>service detaile {serviceId}</h1>


    </div>
  );
};

export default DetailService;