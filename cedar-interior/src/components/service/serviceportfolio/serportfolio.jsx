import React from 'react'
import './serportfolio.css';
import port1 from '../../../images/service/port1.png';
import port2 from '../../../images/service/port2.png';
import port3 from '../../../images/service/port3.png';
import port4 from '../../../images/service/port4.png';
import port6 from '../../../images/service/port6.png';
import port7 from '../../../images/service/port7.png';
import port8 from '../../../images/service/port8.png';
import port5 from '../../../images/service/port5.png';

const serportfolio = () => {
    const portfolioimg1 = [port1, port2,port3,port4];
    const duplicatedImages = [...portfolioimg1, ...portfolioimg1]; 
    const portfolioimg2 = [port5, port6,port7,port8];
    const duplicatedImages2 = [...portfolioimg2, ...portfolioimg2]; 
      
  return (
    <div className='serviceportfolio'>
 <h2 className="header2">PORTFOLIO FOR <span>HOME INTERIORS</span></h2>
 <p>Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C. Experience the fusion</p>
 <div className="hr"></div>
 
 <div className="servportfolioinner">
 <div className="carousel-container">
      <div className="logo-carousel">
        {duplicatedImages.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
    {/*second*/}
    <div className="carousel-container">
      <div className="logo-carousel1">
        {duplicatedImages2.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>

 </div>

    </div>
  )
}

export default serportfolio