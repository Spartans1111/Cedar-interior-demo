import React from "react";
import "./service.css";
import Quatationform from "../formdesign/quoteform";
import Aboutslider from "../about/aboutslider";
import Awardandwinning from "../awardandwinng/awardandwinning";
import Homeservice from "./homeservice/homeservice";
import Serportfolio from "./serviceportfolio/serportfolio";
import Succes from "../Home/success/success";
import Testimonial from "../Home/powerfull/powerfull";
import Serviceabt from "./servicabt/serviceabt";

function service() {
  return (
    <div className="service-main">
      <div className="servicehero"></div>
      <div className="servicehero1">
        <div className="servicehero1col">
          <div className="discount">
            <h2 className="header2">
              <span>Home Interior Design Starting from</span> 2 Lakhs
            </h2>
            <h5 className="smallhead">cedar interiors</h5>
          </div>
        </div>
        <div className="servicehero1col">
          <Quatationform />
        </div>
      </div>
      <div className="serviceinterior">
        <div className="serviceinteriorcol  sercol1">
          <div className="service-slide">
            {" "}
            <Aboutslider />
          </div>
        </div>
        <div className="serviceinteriorcol sercol2">
          <Awardandwinning />
        </div>
      </div>
      <div className="hrline-bg">
        <div className="hrline"></div>{" "}
      </div>
      <Homeservice />
      <Serviceabt />
      <Serportfolio />

      <Succes />
      <div className="servicegap"></div>
      <Testimonial />
    </div>
  );
}

export default service;
