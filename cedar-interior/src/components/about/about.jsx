import React from "react";
import "./about.css";
import Aboutslider from "./aboutslider";
import border from "../../images/aboutpage/border.png";
import Awardandwinning from "../awardandwinng/awardandwinning";
import Testimonial from "../Home/powerfull/powerfull";
import abimg1 from "../../images/c1 (1).png";
import abimg2 from "../../images/c1 (2).png";
import abimg3 from "../../images/c1 (3).png";
import abimg4 from "../../images/c1 (4).png";
import bestimg from "../../images/aboutpage/bestseller.png";
import primum from "../../images/aboutpage/primiumquality.png";
import aboutarrow from "../../images/aboutpage/aboutarow.png";
import { BiRightArrowAlt } from "react-icons/bi";

function about() {
  return (
    <div className="about-main">
      <div className="about-hero">
        <div className="aboutheroleft">
          <img src={border} alt="img" className="aboutborderimg" />
          <div className="about-slide">
            <Aboutslider />
          </div>
        </div>
        <div className="aboutheroright">
          <Awardandwinning />
        </div>
      </div>
      
      <div className="aboutherosecond">
        <div className="hrline"> </div>
        <div className="missandvis">
          <div className="vission">
            <h5 className="smallhead">OUR VISION</h5>
            <p>
              We envision leading the interior designing with innovation and
              excellence. Rooted in trust and transparency, we aim to deliver
              tailored solutions that surpass expectations, empowering
              industries interior solutions.
            </p>
          </div>
          <div className="mission">
            <h5 className="smallhead">OUR MISSION</h5>
            <p>
              We envision leading the interior designing with innovation and
              excellence. Rooted in trust and transparency, we aim to deliver
              tailored solutions that surpass expectations, empowering
              industries interior solutions.
            </p>
          </div>
        </div>
      </div>
      {/*end*/}

      <div className="aboutchoose">
        <div className="aboutchoosrow1">
          <div className="aboutchooserow1col col1">
            <h2 className="header2">Why choose Cedar Interiors Designers?</h2>
            <p>
              Choose us for interior designing solutions backed by a commitment
              to safety, reliable performance, and customer-centricity. With
              expertise, agility, and a focus on innovation, we ensure your
              electrical infrastructure exceeds expectations while fostering
              trust and integrity.
            </p>
          </div>
          <div className="aboutchooserow1col col2">
            <div className="yofexp">
              <p>28+</p>
              <span>Years of Experience</span>
            </div>

            <div className="yofexp">
              <p>2670+</p>
              <span>Sq.ft Developed</span>
            </div>
            <div className="yofexp">
              <p>652+</p>
              <span>Projects delivered</span>
            </div>
          </div>
        </div>
        {/*end*/}
        <div className="about-card">
          <div className="about1-col">
            <div className="blurb">
              <img src={abimg1} alt="" />
              <h4>Transparency</h4>
              <p>
                We handle every facet of your are from design and procurement is
                installation and commissioning,
              </p>
            </div>
          </div>
          <div className="about1-col">
            <div className="blurb">
              <img src={abimg2} alt="" />
              <h4>Dedication</h4>
              <p>
                We handle every facet of your are from design and procurement is
                installation and commissioning,
              </p>
            </div>
          </div>
          <div className="about1-col">
            <div className="blurb">
              <img src={abimg3} alt="" />
              <h4>Progressive</h4>
              <p>
                We handle every facet of your are from design and procurement is
                installation and commissioning,
              </p>
            </div>
          </div>
          <div className="about1-col">
            <div className="blurb">
              <img src={abimg4} alt="" />
              <h4>Trustability</h4>
              <p>
                We handle every facet of your are from design and procurement is
                installation and commissioning,
              </p>
            </div>
          </div>
        </div>
        <div className="aboutbtn2">
          {" "}
          <button className="btn2">
            PORTFOLIO PROJECTS
            <span>
              <BiRightArrowAlt />
            </span>
          </button>
        </div>
      </div>

      {/*best selling*/}

      <div className="bestselling">
        <div className="bestsellcol">
          <div className="bestsellcard">
            <img src={bestimg} alt="img" className="bestsellimg" />
            <div className="bestbtn">
              {" "}
              <button className="btn1">10+Years Warrenty</button>
            </div>
          </div>
        </div>
        <div className="bestsellcol">
          <p className="bestp">Best Selling Finishes </p>
          <h2 className="header2">
            <span>We use materials only from our in </span>house manufacturing
          </h2>
          <h6>with cedar interiors</h6>
          <p>
            Elevate your spaces with Cedar Interiors L.L.C. Experience the
            fusion of your aspirations with our expertise, creating interiors
            that speak volumes. Your space, our dedication a partnership that
            transforms imagination reality.
          </p>
          <div className="primumimg">
            <img src={primum} alt="primum" />
            <img src={aboutarrow} alt="aboutarrow" className="aboutimgarrow" />
          </div>
        </div>
      </div>
      
      <Testimonial />
    </div>
  );
}

export default about;
