import React, { useEffect, useState } from 'react';
import img1 from '../../../images/quotationslider/img1.png';
import img2 from '../../../images/quotationslider/img2.png';
import img3 from '../../../images/quotationslider/img3.png';
import img4 from '../../../images/quotationslider/img4.png';

const Quotationslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const images = [img1, img2, img3, img4];
  
  // Duplicate the first image at the end to create an infinite loop effect
  const extendedImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length) {
          // Disable transition to "jump" back to the first image
          setIsTransitioning(false);
          return 0; // Jump back to the original first image
        }
        setIsTransitioning(true);
        return prevIndex + 1;
      });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Watch when the currentIndex changes to reset the transition after it "jumps"
  useEffect(() => {
    if (!isTransitioning) {
      // Once the jump happens, immediately re-enable transition for the next slides
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50); // Small delay to prevent blinking
    }
  }, [isTransitioning]);

  return (
    <div className="quote-slider">
      <div
        className="quote-slider-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Slide horizontally
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none', // Smooth transition or no transition during the reset
        }}
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="h-slide">
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotationslider;
