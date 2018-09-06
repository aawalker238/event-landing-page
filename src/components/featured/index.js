import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';
import { eventName } from '../../utils/constants';

const Featured = () => {
  return (
    <div style={{ position: 'relative'}}>

      <Carousel />
      
      <div className="event_name">
        <div className="wrapper">
          { eventName } {new Date().getFullYear()}
        </div>
      </div>

      <Countdown />

    </div>
  );
};

export default Featured;