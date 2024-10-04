import React from 'react';
import './detailpackage.css'
import pk1 from '../../../images/pakage1.png';
import pk2 from '../../../images/herobanner3.png';
import { MdCurrencyRupee } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const detailpackage = () => {
  return (
    <div className='detailpackage'>
        <h2 className="header2">DETAILED PACKAGE VIEW</h2>
        <p>Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C. Experience the fusion</p>
        <div className="hr"></div>
        
        <div className="detailofpackage">
           <div className="detailsofbackageimg">
            <img src={pk1} alt="" />
            <p className='bhk'>2 BHK</p>
           </div>
           <div className="detailsofpackagecontent">
           <p className='price'><i><MdCurrencyRupee /></i>5.25LAKH ONLY <span>7.8LAKH</span></p>
           {/*packagesdetailscontent*/}
           <div className="package-blurbs">
            <div className="package-blurbscol">
                <div className="packageblurb">
                    <h5 className="smallhead">FOYER</h5>
                    <p>Shoe rack - 100*75 cm</p>
                </div>
                {/*blurb*/}
                <div className="packageblurb">
                    <h5 className="smallhead">LIVING ROOM</h5>
                    <p>Premium LCD display unit – 180 * 120 cm</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">DINING ROOM</h5>
                    <p>Medley black finish dining table 6 Seater 
                    (L 210*W 110 cm) Briano dining chair (3 Nos). <br></br>3 Seater dining bench – (1 No)</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">GUEST BEDROOM</h5>
                    <p>Soft close 3 door hinged wardrobe with grey 
Queen size bed without bottom storage
Bed side table (1 No) – 50*40*35 cm </p>
                </div>
            </div>
            <div className="package-blurbscol">
                <div className="packageblurb">
                    <h5 className="smallhead">KIDS ROOM</h5>
                    <p>Soft close 3 door hinged wardrobe with white
                    Queen size bed without bottom storage </p>
                </div>
                {/*blurb*/}
                <div className="packageblurb">
                    <h5 className="smallhead">MASTER BEDROOM</h5>
                    <p>Soft close 3 door hinged wardrobe with grey 
                    Queen size bed without bottom Storage – </p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">MODULAR KITCHEN</h5>
                    <p>Bottom cabinet – 304*85 cm<br/>
Top cabinet – 304*60 cm<br/>
Hettich (German Made – 15 years warranty) <br/>
Hood and Hob – Faber Accessories<br/>
Cutlery tray, Plain basket, Plate rack,
Bottle pull out</p>
                </div>
               
            </div>
           </div>
           <button className="btn1">NEED SERVICES <span><FaArrowRight /></span></button>
           </div>

        </div>

  {/*detailpackage2*/}      
  <div className="detailofpackage">
           <div className="detailsofbackageimg">
            <img src={pk2} alt="" />
            <p className='bhk'>3 BHK</p>
           </div>
           <div className="detailsofpackagecontent">
           <p className='price'><i><MdCurrencyRupee /></i>6.25LAKH ONLYY <span>8.8LAKH</span></p>
           {/*packagesdetailscontent*/}
           <div className="package-blurbs">
            <div className="package-blurbscol">
                <div className="packageblurb">
                    <h5 className="smallhead">FOYER</h5>
                    <p>Shoe rack - 100*75 cm</p>
                </div>
                {/*blurb*/}
                <div className="packageblurb">
                    <h5 className="smallhead">LIVING ROOM</h5>
                    <p>Premium LCD display unit – 180 * 120 cm</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">DINING ROOM</h5>
                    <p>Medley black finish dining table 6 Seater 
                    (L 210*W 110 cm) Briano dining chair (3 Nos). <br></br>3 Seater dining bench – (1 No)</p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">GUEST BEDROOM</h5>
                    <p>Soft close 3 door hinged wardrobe with grey 
Queen size bed without bottom storage
Bed side table (1 No) – 50*40*35 cm </p>
                </div>
            </div>
            <div className="package-blurbscol">
                <div className="packageblurb">
                    <h5 className="smallhead">KIDS ROOM</h5>
                    <p>Soft close 3 door hinged wardrobe with white
                    Queen size bed without bottom storage </p>
                </div>
                {/*blurb*/}
                <div className="packageblurb">
                    <h5 className="smallhead">MASTER BEDROOM</h5>
                    <p>Soft close 3 door hinged wardrobe with grey 
                    Queen size bed without bottom Storage – </p>
                </div>
                 {/*blurb*/}
                 <div className="packageblurb">
                    <h5 className="smallhead">MODULAR KITCHEN</h5>
                    <p>Bottom cabinet – 304*85 cm<br/>
Top cabinet – 304*60 cm<br/>
Hettich (German Made – 15 years warranty) <br/>
Hood and Hob – Faber Accessories<br/>
Cutlery tray, Plain basket, Plate rack,
Bottle pull out</p>
                </div>
               
            </div>
           </div>
           <button className="btn1">NEED SERVICES <span><FaArrowRight /></span></button>
           </div>

        </div>


    </div>
  )
}

export default detailpackage