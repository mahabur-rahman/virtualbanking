import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import aboutImg from "../images/about.png";

function About() {
  const [hover, setHover] = useState(false);

  const toggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 order-2 order-lg-1 mt-5 pt-5 pt-lg-0 mt-lg-0">
              <div className="about__left">
                <h6>Premium Bank</h6>
                <h2 className="text-capitalize">
                  Unlimited Transaction With Zero Fees
                </h2>
                <p>
                  Get access to our exclusive app that allows you to send
                  unlimited transaction without getting charged any fees
                </p>
                <div className="about__btn">
                  <NavLink
                    to="/about"
                    className="btn btn-light mt-4"
                    onMouseEnter={toggle}
                    onMouseLeave={toggle}
                  >
                    About Us
                    <span className="angle">
                      {hover ? <FaArrowRight /> : <FaAngleRight />}
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-10 mx-auto order-1 order-lg-2">
              <div className="common__img">
                <img
                  src={aboutImg}
                  alt="About Us"
                  className="img-fluid animated_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
