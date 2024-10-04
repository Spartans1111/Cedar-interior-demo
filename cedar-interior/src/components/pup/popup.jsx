// Popup.js
import React from 'react';
import './popup.css'; 
import popupimg from '../../images/popup.png';
import Quoteform from '../../components/formdesign/quoteform';

const Popup = ({ showPopup, closePopup }) => {
  return (
    showPopup ? (
      <div className="popup-overlay">
        <div className="popup-content">
          <span className="close-btn" onClick={closePopup}>×</span>
          <h2 className='header2'>Get a Quotation</h2>
          <p>Please fill in your details to get a quotation.</p>
          <div className="popuprow">
            <div className="pupupcol">
              <img src={popupimg} alt="popup" />
            </div>
            <div className="pupupcol">
              <Quoteform/>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Popup;
