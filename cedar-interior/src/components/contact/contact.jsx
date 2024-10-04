import React from "react";
import "./contact.css";
import contactimg from "../../images/contact/cantactimg.png";
import Quoteform from "../formdesign/quoteform";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { IoMdLocate } from "react-icons/io";

const contact = () => {
  return (
    <div className="contact">
      <div className="contacthero"></div>
      <div className="contact-top">
        <div className="contact-address">
          <div className="address-inner">
            <img src={contactimg} alt="" />

            <div className="address-text-inner">
              <p className="contact-head">CONTACT US - HEADQUATRES</p>

              <div className="contact-blurb">
                <div className="blurb">
                  <i>{<IoLocationOutline />}</i>
                  <div className="con-blurb-content">
                    <h4>ADDRESS</h4>
                    <p>
                      7th Avenue, Naibi street pallakad, Kerala, INDIA - 682028
                    </p>
                  </div>
                </div>

                <div className="contactt-blurb-col">
                  <div className="blurb">
                    <i>{<TiMessage />}</i>
                    <div className="con-blurb-content">
                      <h4>MAIL ID</h4>
                      <p>office@caderdesigns.in</p>
                    </div>
                  </div>

                  <div className="blurb">
                    <i>{<MdPhone />}</i>
                    <div className="con-blurb-content">
                      <h4>PHONE NUMBER</h4>
                      <p>+91 940 098 9363</p>
                    </div>
                  </div>
                  <div className="blurb">
                    <p>+91 940 098 9363</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <Quoteform />
        </div>
      </div>
      
     
      <hr />
      
      <div className="contactt-branches">
        <h2 className="header2">
          <span>OUR BRANCHES</span>
        </h2>
        <div className="branch-hr"></div>
        <div className="contact-branch-inner">
          {/*col1*/}
          <div className="branch-col">
            <h5>Palakkad</h5>
            <div className="blurb">
              <i>{<IoLocationOutline />}</i>
              <div className="con-blurb-content">
                <h4>ADDRESS</h4>
                <p>
                  7th Avenue, Naibi street <br /> pallakad, Kerala, INDIA -
                  682028
                </p>
              </div>
            </div>

            <div className="blurb">
              <i>{<MdPhone />}</i>
              <div className="con-blurb-content">
                <h4>PHONE NUMBER</h4>
                <p>+91 940 098 9363</p>
              </div>
            </div>
            {/*map*/}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016977.097497652!2d71.37534595574378!3d10.51411561476923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1727182594277!5m2!1sen!2sin"
                width="350"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="btn">
                <i>
                  <IoMdLocate />
                </i>
                Locate in map
              </div>
            </div>
          </div>
          {/*col1*/}
          <div className="branch-col">
            <h5>Palakkad</h5>
            <div className="blurb">
              <i>{<IoLocationOutline />}</i>
              <div className="con-blurb-content">
                <h4>ADDRESS</h4>
                <p>
                  7th Avenue, Naibi street <br /> pallakad, Kerala, INDIA -
                  682028
                </p>
              </div>
            </div>

            <div className="blurb">
              <i>{<MdPhone />}</i>
              <div className="con-blurb-content">
                <h4>PHONE NUMBER</h4>
                <p>+91 940 098 9363</p>
              </div>
            </div>
            {/*map*/}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016977.097497652!2d71.37534595574378!3d10.51411561476923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1727182594277!5m2!1sen!2sin"
                width="350"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="btn">
                <i>
                  <IoMdLocate />
                </i>
                Locate in map
              </div>
            </div>
          </div>
          {/*col1*/}
          <div className="branch-col">
            <h5>Palakkad</h5>
            <div className="blurb">
              <i>{<IoLocationOutline />}</i>
              <div className="con-blurb-content">
                <h4>ADDRESS</h4>
                <p>
                  7th Avenue, Naibi street <br /> pallakad, Kerala, INDIA -
                  682028
                </p>
              </div>
            </div>

            <div className="blurb">
              <i>{<MdPhone />}</i>
              <div className="con-blurb-content">
                <h4>PHONE NUMBER</h4>
                <p>+91 940 098 9363</p>
              </div>
            </div>
            {/*map*/}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016977.097497652!2d71.37534595574378!3d10.51411561476923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1727182594277!5m2!1sen!2sin"
                width="350"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="btn">
                <i>
                  <IoMdLocate />
                </i>
                Locate in map
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
