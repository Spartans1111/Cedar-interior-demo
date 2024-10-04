import React from 'react';
import './homeservice.css';
import { BiRightArrowAlt } from "react-icons/bi";
import hsimg1 from '../../../images/herobanner2.png';
import hsimg2 from '../../../images/package2.png';
import hsimg3 from '../../../images/pakage1.png';

const homeservice = () => {
  return (
    <div className='homeservice'><h2 className="header2">SERVICES <span>FOR HOME INTERIORS</span></h2>
    <p>Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C. Experience the fusion</p>
    <div className="hr"></div>
    {/*servicecard*/}
  <div className="homeservicecard">
    <div className="homesercardcol">
        <h5 className="smallhead">Living room designs</h5>
        <p>Elegant comfort and style for enduring
        relaxation in your home.</p>
        <button className='btn2'>Know more <span><BiRightArrowAlt/></span></button>
        <img src={hsimg1} alt="homedesign" />
    </div>
    {/*card2*/}
    <div className="homesercardcol">
        <h5 className="smallhead">Kitchen designs</h5>
        <p>Elegant comfort and style for enduring
        relaxation in your home.</p>
        <button className='btn2'>Know more <span><BiRightArrowAlt/></span></button>
        <img src={hsimg2} alt="homedesign" />
    </div>
       {/*card32*/}
       <div className="homesercardcol">
        <h5 className="smallhead">Dinning designs</h5>
        <p>Elegant comfort and style for enduring
        relaxation in your home.</p>
        <button className='btn2'>Know more <span><BiRightArrowAlt/></span></button>
        <img src={hsimg2} alt="homedesign" />
    </div>
      {/*card32*/}
      <div className="homesercardcol">
        <h5 className="smallhead">Bed room designs</h5>
        <p>Elegant comfort and style for enduring
        relaxation in your home.</p>
        <button className='btn2'>Know more <span><BiRightArrowAlt/></span></button>
        <img src={hsimg3} alt="homedesign" />
    </div>

  </div>


    </div>
  )
}

export default homeservice