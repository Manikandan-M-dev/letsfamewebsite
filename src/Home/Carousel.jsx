import React from 'react';
import "../Assets/cardblog.css";
import StorySlider from './StorySlider';
const Carousel = () => {

  return (
    <>
      <div className="carousalmain">
        <div className='carousalhead'>
          <h2>What people say</h2>
          <p>Hear from some of our outstanding talents on how LetsFAME reshaped their career!</p>
        </div>
        <div className="carousel-story">
                <StorySlider/>
        </div>
      </div >
    </>
  );
};
export default Carousel; 
