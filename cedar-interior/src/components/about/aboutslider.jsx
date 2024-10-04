import React, { useEffect, useState } from 'react';
import aboutimg1 from '../../images/aboutpage/aboutimg3.png';
import aboutimg2 from '../../images/aboutpage/aboutimg.png';
import aboutimg3 from '../../images/aboutpage/aboutimg4.png';

const AboutSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [aboutimg1, aboutimg2, aboutimg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval for flip speed
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="aboutslider">
      {images.map((src, index) => (
        <div
          key={index}
          className={`h-slide ${currentIndex === index ? 'active' : ''}`}
        >
          <img src={src} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default AboutSlider;
