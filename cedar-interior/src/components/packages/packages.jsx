import React from 'react';
import './packages.css'
import Quatationform from '../formdesign/quoteform';
import Package from '../package/package.jsx';
import Detailpackage from './detailpackage/detailpackage.jsx';
import Keralapkg from './keralapackage/keralapkg.jsx';
import { GoArrowDown } from "react-icons/go";
import Tesimonial from '../Home/powerfull/powerfull.jsx';
import Accordian from '../Home/accordian/accordian.jsx';
const packages = () => {
  return (
    <div>
        <div className="packagehero"></div>
        <div className="pakageshero1">
            <div className="packkageshero1col">
                     <div className="discount">
                        <h2 className="header2"><span>Avoid Retailers
                        Get</span> 30% Discount</h2>
                        <h5 className="smallhead">cedar interiors</h5>
                     </div>

            </div>
            <div className="packkageshero1col">
                      <Quatationform/>
            </div>
        </div>
        <div className="scrolldown"><GoArrowDown /> SCROLL DOWN</div>
<Package/>
<Detailpackage/>
<Keralapkg/>
<Tesimonial/>
<Accordian/>

        </div>
  )
}

export default packages