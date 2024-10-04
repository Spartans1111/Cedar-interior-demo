import React, { useState } from "react";
import Quotationslider from "./quotationslider";
import "./homequotation.css";
import { GoArrowRight } from "react-icons/go";
const Homequotation = () => {
  // Initialize the selectedOption state using useState
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the state when option changes
  };
  return (
    <div className="homequtation">
      <div className="homequationslider">
        <div className="slide">
          {" "}
          <Quotationslider />
        </div>
      </div>
      <div className="homequotationcontent">
        <p>Tag Line - Place Holder</p>
        <h2 className="header2">
          Get a Free <span>Quotation</span>
        </h2>
        <form action="">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="inputfeild"
          />
          <input
            type="text"
            placeholder="Enter Company Name"
            className="inputfeild"
          />
          <input
            type="email"
            placeholder="Enter Email ID"
            className="inputfeild"
          />
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="inputfeild"
          />
          <p className="requsting">
            <label>Your Requesting as - </label>{" "}
            <select
              id="options"
              value={selectedOption}
              onChange={handleSelectChange}
              required
            >
              <option value="director">Director</option>
              <option value="Option 1">director</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </p>

          <button className="submit btn1">
            GET QUOTATION <span>{<GoArrowRight />}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homequotation;
