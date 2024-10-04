import React from "react";
import "./design.css";
import img1 from "../../../images/design/design1.png";
import img2 from "../../../images/design/design2.png";
import img3 from "../../../images/design/design3.png";
import img4 from "../../../images/design/design4.png";
import img5 from "../../../images/design/design5.png";
import { GoArrowRight } from "react-icons/go";

const design = () => {
  return (
    <div className="design">
      <div className="designheader">
        <h2 className="header2">
          OUR SOLUTION <span>FOR YOUR PROBLEMS</span>
        </h2>
        <p>
          Elevate your spaces with Cedar Designs Interior Fitouts L.L.C.
          Experience the fusion of your aspirations with our expertise, creating
          interiors that speak volumes. Your space, our dedication.
        </p>
      </div>
      <div className="design-grid">
        <div className="grid grid1">
          <img src={img3} alt="design" />
          <div className="design-btn">
            <button className="btn2">
              Living room design<span>{<GoArrowRight />}</span>
            </button>
          </div>
        </div>
        <div className="grid grid2">
          {" "}
          <img src={img4} alt="design" />
          <div className="design-btn">
            <button className="btn2">
              Kitchan designs<span>{<GoArrowRight />}</span>
            </button>
          </div>{" "}
        </div>
        <div className="grid grid3">
          {" "}
          <div className="bedroomimg">
            <img src={img5} alt="design" />
            <div className="design-btn">
              <button className="btn2">
                Bedroom designs<span>{<GoArrowRight />}</span>
              </button>
            </div>
          </div>
          <div className="designmore">
            <h3>10+</h3>
            <p>Interior Designs</p>
            <span className="designmorearrow">{<GoArrowRight />}</span>
          </div>
        </div>
        <div className="grid grid4">
          {" "}
          <img src={img2} alt="design" />
          <div className="design-btn">
            <button className="btn2">
              Office designs<span>{<GoArrowRight />}</span>
            </button>
          </div>{" "}
        </div>
        <div className="grid grid5">
          {" "}
          <img src={img1} alt="design" />
          <div className="design-btn">
            <button className="btn2">
              Dining designs<span>{<GoArrowRight />}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default design;
