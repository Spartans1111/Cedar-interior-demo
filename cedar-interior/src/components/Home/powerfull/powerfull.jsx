import React from "react";
import "./powerfull.css";
import qut from "../../../images/quote.png";
import author from "../../../images/testimonial/Sudeepkrishna.png";
import author1 from "../../../images/testimonial/Mahadevan.png";
import author2 from "../../../images/testimonial/Ponmanikavel L.png";
import testi1 from "../../../images/testimonial/interior1.png";
import testi2 from "../../../images/testimonial/interior2.png";
import testi3 from "../../../images/testimonial/interior3.png";
import { FaStar } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const powerfull = () => {
  return (
    <div>
      {" "}
      <div id="Testimonial">
        <div class="row-testimonial">
          <div class="col-testimonial">
            <h2 className="header2">Powerful Insights</h2>
            <p class="get-insight">
              Get an insight into the valuable and impactful thoughts direct
              from our clients.
            </p>
            <h6>REVIEWS & TESTIMONIALS -</h6>
          </div>
          <div class="col-testimonial">
            <div class="satisfied-cutomer">
              <span>89+</span>
              <p>Satisfied Clients worldwide</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3} // default slidesPerView for desktop
            navigation={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div className="card-content-inner">
                      <div class="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p>
                        {" "}
                        Working with [Agency Name] was an absolute absolute
                        pleasure! From concept to completion, they transformed
                        my home into a stunning and functional space. Their
                        attention to detail and to bring my vision to life
                        exceeded all expectations.
                      </p>
                      <div class="quatation">
                        <img src={qut} alt="" />
                      </div>
                    </div>
                  </div>
                  <img src={testi1} alt="" className="card-hoverimg" />
                </div>

                <div class="card-authur">
                  <div className="card-author-inner">
                    <div class="autor-img">
                      {" "}
                      <img src={author} alt="" />
                    </div>
                    <div class="author-name">
                      <p>Sudeep krishna P</p>
                      <p>Thirssur, Kerala</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/*second--*/}
            <SwiperSlide>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div className="card-content-inner">
                      <div class="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p>
                        {" "}
                        Working with [Agency Name] was an absolute absolute
                        pleasure! From concept to completion, they transformed
                        my home into a stunning and functional space. Their
                        attention to detail and to bring my vision to life
                        exceeded all expectations.
                      </p>
                      <div class="quatation">
                        <img src={qut} alt="" />
                      </div>
                    </div>
                  </div>
                  <img src={testi2} alt="" className="card-hoverimg" />
                </div>

                <div class="card-authur">
                  <div className="card-author-inner">
                    <div class="autor-img">
                      {" "}
                      <img src={author1} alt="" />
                    </div>
                    <div class="author-name">
                      <p>Mahadevan</p>
                      <p>Thada, Andhara</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*second end--*/}
            {/*third--*/}
            <SwiperSlide>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div className="card-content-inner">
                      <div class="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p>
                        {" "}
                        Working with [Agency Name] was an absolute absolute
                        pleasure! From concept to completion, they transformed
                        my home into a stunning and functional space. Their
                        attention to detail and to bring my vision to life
                        exceeded all expectations.
                      </p>
                      <div class="quatation">
                        <img src={qut} alt="" />
                      </div>
                    </div>
                  </div>
                  <img src={testi3} alt="" className="card-hoverimg" />
                </div>

                <div class="card-authur">
                  <div className="card-author-inner">
                    <div class="autor-img">
                      {" "}
                      <img src={author2} alt="" />
                    </div>
                    <div class="author-name">
                      <p>Sudeep krishna P</p>
                      <p>Thirssur, Kerala</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*thrid end--*/}
            {/*third--*/}
            <SwiperSlide>
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div className="card-content-inner">
                      <div class="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p>
                        {" "}
                        Working with [Agency Name] was an absolute absolute
                        pleasure! From concept to completion, they transformed
                        my home into a stunning and functional space. Their
                        attention to detail and to bring my vision to life
                        exceeded all expectations.
                      </p>
                      <div class="quatation">
                        <img src={qut} alt="" />
                      </div>
                    </div>
                  </div>
                  <img src={testi2} alt="" className="card-hoverimg" />
                </div>

                <div class="card-authur">
                  <div className="card-author-inner">
                    <div class="autor-img">
                      {" "}
                      <img src={author1} alt="" />
                    </div>
                    <div class="author-name">
                      <p>Sudeep krishna P</p>
                      <p>Thirssur, Kerala</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*thrid end--*/}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default powerfull;
