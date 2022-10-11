import React from 'react';
import Service from '../Service/Service';
import { ServicesData } from '../../../Data';

import './Services.css'

const Services = () => {

  return (
    <div className='container'>
      <h2 className='services-title my-3'>Services </h2>
      <div className="services-container">
        {
          ServicesData.map(service => <Service
            key={service.id}
            service={service}
          ></Service>
          )
        }
      </div>
    </div>
  );
};

export default Services;