import React from 'react'
import './gallery1.css';
import port1 from '../../../images/gallery/gallery (1).png';
import port2 from '../../../images/gallery/gallery (2).png';
import port3 from '../../../images/gallery/gallery (3).png';
import port4 from '../../../images/gallery/gallery (4).png';

const gallery1 = () => {
    const portfolioimg1 = [port1, port2,port3,port4];
    const duplicatedImages = [...portfolioimg1, ...portfolioimg1]; 
    
  return (
    <div className='gallery1'>
<div className="carousel-container">
      <div className="logo-carousel">
        {duplicatedImages.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
      </div>
  )
}

export default gallery1