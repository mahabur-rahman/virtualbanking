import React, { useState } from "react";
import video from "../videos/video.mp4";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

function Banner() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <section id="banner" className="mt-5">
        <div className="video__wrap">
          <video autoPlay muted loop>
            <source src={video} />
          </video>
          {/* overlay  */}
          <div className="dark__overlay"> </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-11 col-lg-12 mx-auto">
              <div className="main__content">
                <h2> Virtual Banking Made Easy </h2>
                <p className="pt-3">
                  Sign up for a new account today and receive $ 250 in credit
                  towards your next payment.We 'll join you in the journey of
                  consolidating your companies marketing & sales strategy
                </p>
                <NavLink
                  to="/sign-up"
                  className="btn btn-light mt-4"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                >
                  Get Started
                  <span className="angle">
                    {hover ? <FaArrowRight /> : <FaAngleRight />}
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
