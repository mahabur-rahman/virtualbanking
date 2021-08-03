import React from "react";
import { NavLink } from "react-router-dom";
import signUpImg from "../images/signUp.png";

function SignUp() {
  return (
    <>
      <section id="signUp">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-10 mx-auto order-2 order-lg-1">
              <div className="about__left">
                <h6> Join Our Team </h6>
                <h2 className="text-capitalize text-dark">
                  creating an account is extremely easy
                </h2>
                <p className="text-dark">
                  Get everywhere set up and ready in under 10 minutes.All you
                  need to do is add your information and you 're ready to go
                </p>
                <div className="about__btn">
                  <NavLink
                    to="/sign-in"
                    className="btn btn-light text-dark mt-4"
                  >
                    Start Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-1 order-lg-2">
              <div className="common__img">
                <img src={signUpImg} alt="About Us" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
