import React from 'react';
import './awardandwinng.css';
import aw1 from '../../images/awandwin/aw1.png';
import aw2 from '../../images/awandwin/aw2.png';

const Awardandwinning = () => {
  return (
    <div className='awardandwinnig'> <h2 className='header2'><span>Beautiful house interior</span></h2>
    <h6>with cedar interiors</h6>
    <p>Elevate your spaces with Cedar Interiors L.L.C. Experience the fusion of
your aspirations with our expertise, creating interiors  that speak volumes.
Your space, our dedication a partnership that transforms imagination reality.</p>
<p>Elevate your spaces with Cedar Interiors L.L.C. Experience the fusion of
your aspirations with our expertise, creating interiors  that speak.</p>

<div className="awardwiningblurb">
    <div className="blurb">
        <div className='aw-blurbimg'>
          <img src={aw2} alt="aw" />
        </div>
        <div className="aw-blurbcontent">
            <h5>1000+</h5>
            <p>Projects Delivered</p>
        </div>
    </div>
    <div className="blurb">
        <div className='aw-blurbimg'>
          <img src={aw1} alt="aw" />
        </div>
        <div className="aw-blurbcontent">
            <h5>Award Winning
          </h5>
            <p>Projects Delivered</p>
        </div>
    </div>
</div>
</div>
  )
}

export default Awardandwinning;