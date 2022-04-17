import React from 'react';
import { Carousel } from 'react-bootstrap';
import benner4 from '../../images/benner/benner4.png'
import benner2 from '../../images/benner/benner2.png'
import benner1 from '../../images/benner/benner1.png'


const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={benner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Regular Service</h5>
            <p>Qualityful Photo with BEST Wedding Photograph</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={benner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h5>Premium Service</h5>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={benner4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h5>Super Premium Service</h5>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default Slider;