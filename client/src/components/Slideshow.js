// Import React
import React from 'react';

// Import components
import { Fade } from 'react-slideshow-image';

// SLideshow Component
const Slideshow = () => {
  return (
    <Fade className='slideshow'>
      <div className='each-fade'>
        <div className='image-container image-container--guitar'>
          <h3 className='caption'>Meet talented freelance musicians!</h3>
        </div>
      </div>
      <div className='each-fade'>
        <div className='image-container image-container--band'>
          <h3 className='caption'>Find a member for your band!</h3>
        </div>
      </div>
      <div className='each-fade'>
        <div className='image-container image-container--venue'>
          <h3 className='caption'>Explore local venues looking to hire!</h3>
        </div>
      </div>
    </Fade>
  );
};

export default Slideshow;
