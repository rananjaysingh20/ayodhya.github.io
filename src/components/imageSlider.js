import React, { useState } from 'react';
import '../styles/backgroundSlider.css'; // Import CSS file for styling
import Image1 from '../assets/homeimg1.jpg';
import Image2 from '../assets/homeimg2.jpg';
import Image3 from '../assets/homeimg3.jpg';

const slides = [
  {
    image: Image1,
    text: 'Welcome to Slide 1',
  },
  {
    image: Image2,
    text: 'This is Slide 2',
  },
  {
    image: Image3,
    text: 'Slide 3 here',
  },
  // Add more slides as needed
];

function BackgroundSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlideIndex ? 'slide active' : 'slide'}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-text">{slide.text}</div>
          </div>
        ))}
        <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
        <button className="next" onClick={goToNextSlide}>&#10095;</button>
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlideIndex ? 'dot active' : 'dot'}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default BackgroundSlider;