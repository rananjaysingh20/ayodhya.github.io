import React, { useState } from 'react';
import '../styles/backgroundSlider.css'; // Import CSS file for styling
import Image1 from '../assets/homeimg1.jpg';
import Image2 from '../assets/homeimg2.jpg';
import Image3 from '../assets/homeimg3.jpg';

const slides = [
  {
    image: Image1,
    text: 'Himachal',
    para: "Discover breathtaking landscapes and serene beauty in Himachal's majestic mountains."
  },
  {
    image: Image2,
    text: 'Kerala',
    para: "Escape to Kerala's tranquil backwaters and lush greenery for a rejuvenating retreat."
  },
  {
    image: Image3,
    text: 'Ayodhya',
    para: "Embark on a spiritual journey to Ayodhya, the sacred city of ancient temples."
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
            <div className="slide-text">
                {slide.text}
                <p className='slide-para'>{slide.para}</p>
            </div>
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