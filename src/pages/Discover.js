import React, { useState } from "react";
import discoverImg from "../images/discover.png";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

function Discover() {
  const [hover, setHover] = useState(false);

  const toggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0">
              <div className="about__left">
                <h6>Unlimited Access</h6>
                <h2 className="text-capitalize">
                  Login to your account at any time
                </h2>
                <p>
                  We have you covered no matter where you are located. All you
                  need is an internet connection and a phone or computer
                </p>
                <div className="about__btn">
                  <NavLink
                    to="/discover"
                    className="btn btn-light mt-4"
                    onMouseEnter={toggle}
                    onMouseLeave={toggle}
                  >
                    Learn More
                    <span className="angle">
                      {hover ? <FaArrowRight /> : <FaAngleRight />}
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-10 mx-auto order-1 order-lg-2">
              <div className="common__img">
                <img src={discoverImg} alt="About Us" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
