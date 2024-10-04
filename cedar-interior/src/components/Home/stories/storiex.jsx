import React from 'react';
import './stories.css';
import img1 from '../../../images/stories1.png';
import img2 from '../../../images/stories3.png';
import img3 from '../../../images/stories2.png';

const storiex = () => {
  return (
    <div className='stories'>
        <p className='build'>BUILD YOUR DREAM Cedar</p>
        <h2 className='header2'>Explore stories</h2>
        <p className='elevate'>Elevate your spaces with W7 Designs & Interior Fitouts L.L.C. Experience the fusion of your aspirations with
        our expertise, creating interiors that speak volumes. Your space, our dedication.</p>
<div className="stories-row">
    <div className="stores-col">
        <img src={img1} alt="story" />
        <p>1.Top 10 Interior Design Trends to Transform Your Space in 2024</p>
    </div>
    <div className="stores-col">
    <img src={img2} alt="story" />
    <p>2.The Art of Minimalism: How to Achieve a Clutter-Free Home</p>
    </div>
    <div className="stores-col">
    <img src={img3} alt="story" />
    <p>3.The Ultimate Guide to Choosing the Perfect Furniture for Your Space</p>
    </div>
</div>

    </div>
  )
}

export default storiex