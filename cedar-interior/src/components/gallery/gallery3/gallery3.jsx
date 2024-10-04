import React from 'react'
import port9 from '../../../images/gallery/gallery (9).png';
import port10 from '../../../images/gallery/gallery (10).png';
import port11 from '../../../images/gallery/gallery (11).png';
import port12 from '../../../images/gallery/gallery (12).png';

const gallery3 = () => {
    const portfolioimg1 = [port9, port10,port11,port12];
    const duplicatedImages = [...portfolioimg1, ...portfolioimg1]; 
  return (
    <div> 
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

export default gallery3