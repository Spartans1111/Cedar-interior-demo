import React from "react";
import "./success.css";
import success1 from "../../../images/success/success (1).png";
import success2 from "../../../images/success/success (2).png";
import success3 from "../../../images/success/success (3).png";
import success4 from "../../../images/success/success (4).png";

const success = () => {
  return (
    <div className="successstory">
      <div className="success">
        <p className="build-success">BUILD YOUR DREAM WITH</p>
        <h2 className="header2">OUR SUCCESS ROUTE</h2>
        <p className="sucees-elevate">
          Elevate your spaces with Vedar Designs & Interior Fitouts L.L.C.
          Experience the fusion of your aspirations with our expertise, creating
          interiors that speak volumes. Your space, our dedication.
        </p>
      </div>

      <div className="success-card">
        <div className="sucess-card1">
          <ul class="card-color">
            <li class="item">
              {" "}
              <img src={success1} alt="" />
            </li>
            <li class="item">
              {" "}
              <img src={success2} alt="" />
            </li>
            <li class="item">
              {" "}
              <img src={success3} alt="" />
            </li>
            <li class="item">
              {" "}
              <img src={success4} alt="" />
            </li>
          </ul>
        </div>
        <div className="success-card2">
          <div className="success-col">
            <div className="blurb">
              <h4>CONCEPT</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>
          <div className="success-col">
            <div className="blurb">
              <h4>IDEALOGY</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>
          <div className="success-col">
            <div className="blurb">
              <h4>DESIGN</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>
          <div className="success-col">
            <div className="blurb">
              <h4>EXECUTION</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>
        </div>

        {/* mobile*/}

        <div className="success-card-mob">
          <div class="item">
              {" "}
              <img src={success1} alt="" />
              <div className="blurb">
              <h4>CONCEPT</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>



          <div class="item">
              {" "}
              <img src={success2} alt="" />
              <div className="blurb">
                <h4>IDEALOGY</h4>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
          </div>

          <div class="item">
              {" "}
              <img src={success3} alt="" />
              <div className="blurb">
              <h4>DESIGN</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>

          <div class="item">
              {" "}
              <img src={success4} alt="" />
              <div className="blurb">
              <h4>EXECUTION</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default success;
