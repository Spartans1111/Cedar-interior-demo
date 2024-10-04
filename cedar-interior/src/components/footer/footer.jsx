import React from "react";
import Quoteform from "../formdesign/quoteform";
import "./footer.css";
import footerhouse from "../../images/footerhouse.png";
import flogo from "../../images/footelogo.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";

import { TiMessage } from "react-icons/ti";
import fb from "../../images/footer/fb.png";
import insta from "../../images/footer/insta.png";
import tw from "../../images/footer/tw.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footertop-col ftopcol1">
          <img src={footerhouse} alt="" />
        </div>
        <div className="footertop-col ftopcol2">
          <Quoteform />
        </div>
      </div>
      <div className="footermid"></div>
      <div className="hrlinefooter">
        <hr></hr>
      </div>
      <div className="footer-bottom">
        {/* col1 */}
        <div className="footer-bottom-col col1">
          <img src={flogo} alt="logo" />
          <p>
            Elevate your spaces with Cader Designs & Interior Fitouts L.L.C.
            Experience the fusion of your aspirations with our expertise,
            creating interiors that speak volumes. Your space, our dedication –
            a partnership that transforms imagination into reality.
          </p>
        </div>
        {/* col2 */}
        <div className="footer-bottom-col col2">
          <h6>Quick Links</h6>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Blog & Stories</li>
          </ul>
        </div>
        {/* col3 */}
        <div className="footer-bottom-col col3">
          <h6>CONTACT</h6>
          <div className="blurb">
            <i>{<IoLocationOutline />}</i>
            <p>7th Avenue, Naibi street <br />
              Pallakad, Kerala, INDIA - 682028
            </p>
          </div>
          <div className="blurb">
            <i>{<MdPhone />}</i>
            <p>+91 940 098 9363</p>
          </div>
          <div className="blurb">
            <i>{<TiMessage />}</i>
            <p>office@caderdesigns.in</p>
          </div>
        </div>
        {/* col4 */}
        <div className="footer-bottom-col col4">
          <h6>Get connected with us</h6>
          <div className="social-icons">
            <img src={insta} alt="insa" />
            <img src={fb} alt="insa" />
            <img src={tw} alt="insa" />
          </div>
          <h4>STAY TUNED!</h4>
          <form>
            <input
              type="text"
              placeholder="Enter your mail"
              className="subscribe"
            />
            <button>CONNECT</button>
          </form>
        </div>
      </div>
      <div className="secondryfooter">
        <div className="copyright">
          <p>© 2016-2024 . All Rights Reserved</p>
        </div>
        <div className="company">
          <p>Website by Spartan Technologies</p>
        </div>
        <div className="privacyterms">
          <p>Privacy Policy | Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
