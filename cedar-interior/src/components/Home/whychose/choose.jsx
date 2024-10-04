import React, { useState } from 'react';
import './choose.css';
import c1 from '../../../images/c1 (1).png';
import c2 from '../../../images/c1 (2).png';
import c3 from '../../../images/c1 (3).png';
import c4 from '../../../images/c1 (4).png';
import c5 from '../../../images//choosedetails.png';
import Popup from '../../pup/popup';

const Choose = () => {

    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    const openPopup = () => {
      setShowPopup(true); // Function to open the popup
    };
  
    const closePopup = () => {
      setShowPopup(false); // Function to close the popup
    };

  return (
    <div className='whychooseus'>
        <div className="choose-inner">
        <div className="chooseheader">
            <div className="choose-headers">
                <h3>CEDAR FOR YOU</h3>
                <h2 className="header2"><span>Why to choose</span> Cedar Designs</h2>
            </div>
            <p>Elevate your spaces with Cedar Designs Interior Fitouts L.L.C. 
Experience the fusion of  your aspirations with our expertise,
creating interiors that speak volumes. Your spac.</p>
        </div>
      
<div className="chose-content">
    <div className="choose-content-col">
        <div className="blurb">
            <img src={c1} alt="choose" />
            <p>Transparency</p>
        </div>
        <div className="blurb">
            <img src={c2} alt="choose" />
            <p>Progressive</p>
        </div>
    </div>
    <div className="choose-content-col">
    <div className="blurb">
            <img src={c3} alt="choose" />
            <p>Dedication</p>
        </div>
        <div className="blurb">
            <img src={c4} alt="choose" />
            <p>Trustability</p>
        </div>
    </div>
    <div className="choose-content-col">
        <div className="choose-details">
            <img src={c5} alt="" />
            <div className="choose-contactus">
                <div className="choosecontact-inner">
                    <button onClick={openPopup}>Get Quote</button>
                </div>
            </div>
        </div>
        
    </div>
</div>
       </div>
       <Popup showPopup={showPopup} closePopup={closePopup} />
        </div>
        
  )
}

export default Choose;