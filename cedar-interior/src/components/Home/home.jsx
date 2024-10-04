import React from 'react';
import Exprience from './exprience/exprience.jsx'; 
import HeroSlider from './heroslider/heroslider.jsx'; 
import Homequotation from './quotation/homequotation.jsx';
import Package from '../package/package.jsx';
import Design from '../Home/homedesign/design.jsx';
import Chooseus from '../Home/whychose/choose.jsx';
import Work from '../Home/somework/work.jsx';
import Accordian from '../Home/accordian/accordian.jsx';
import Success from '../Home/success/success.jsx';
import Tesimonial from '../Home/powerfull/powerfull.jsx';
import './home.css'; 

function Home() {
 
  return (
    <>
  <HeroSlider/>
    <Exprience/>
    <Homequotation/>
    <Design/>
    <Package/>
    <Chooseus/>
    <Work/>
    <Success/>
      <Tesimonial/>
      <Accordian/>  
    </>
   
  );
}

export default Home;

