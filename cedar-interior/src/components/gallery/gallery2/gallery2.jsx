import React from 'react'
import port5 from '../../../images/gallery/gallery (5).png';
import port6 from '../../../images/gallery/gallery (6).png';
import port7 from '../../../images/gallery/gallery (7).png';
import port8 from '../../../images/gallery/gallery (8).png';

const gallery2 = () => {
    const portfolioimg2 = [port5, port6,port7,port8];
    const duplicatedImages2 = [...portfolioimg2, ...portfolioimg2];
  return (
    <div>  
    <div className="carousel-container">
      <div className="logo-carousel1">
        {duplicatedImages2.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div></div>
  )
}

export default gallery2