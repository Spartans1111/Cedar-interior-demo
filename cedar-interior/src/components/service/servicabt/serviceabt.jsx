import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import './serviceabt.css';
import serviabt1 from '../../../images/service/serviceabt.png';

const serviceabt = () => {
  return (
    <div className='serviceabt'>
        <div className="serviceabtinner">
            <div className="serviceabitinnercol1">
                <div className="servblurb">
                    <h3>8049+</h3>
                    <p>Sq.ft Projects delivered</p>
                </div>
                <div className="servblurb">
                    <h3>8049+</h3>
                    <p>Sq.ft Projects delivered</p>
                </div>
                <div className="servblurb1">
                    <h3 className='smallhead'>Crafting dream
                    spaces since 2003</h3>
                    <p>Atlas Interiors & Kitchen, your partner in quality and excellence. From UAE to your dream home, with 10,000+ projects, we make interior planning a seamless journey.</p>
                    <button className='btn2'>NEED OUR SERVICE <span><BiRightArrowAlt/></span></button>
                </div>
            </div>
            <div className="serviceabitinnercol">
                <h2 className="header2">Beautiful house interior</h2>
                <h6 className="smallhead">with cedar interiors</h6>
                <div className="row1">
                    <div className="row1col">
                        <p>Elevate your spaces with Cedar Interiors L.L.C. Experience the fusion of
your aspirations with our expertise, creating interiors  that speak volumes.
Your space, our dedication a partnership that transforms imagination reality.</p>
                    </div>
                    <div className="row1col col2">
                        <button className='btn2'>EXOLPRE OUR STORY <span><BiRightArrowAlt/></span> </button>
                    </div>
                </div>
                <img src={serviabt1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default serviceabt