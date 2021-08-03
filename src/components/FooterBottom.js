import React from "react";
import {
  FaReact,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function FooterBottom() {
  const time = new Date().getFullYear();
  const name = " Mahabur Rahman";

  return (
    <>
      <section id="footerBottom" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="footer_bottom_content d-flex align-items-center justify-content-between">
                <NavLink to="/">
                  <FaReact className="footer_logo" />
                </NavLink>
                <div className="copyright">
                  <p className="mb-0">
                    &copy; all rights and reserved, developed by
                    <span className="name">
                      <NavLink to="/">{name}</NavLink>
                    </span>
                    <span> {time}.</span>
                  </p>
                </div>
                <div className="social_link">
                  <ul>
                    <li>
                      <NavLink to="/">
                        <FaFacebookF />
                      </NavLink>
                      <NavLink to="/">
                        <FaInstagram />
                      </NavLink>
                      <NavLink to="/">
                        <FaTwitter />
                      </NavLink>
                      <NavLink to="/">
                        <FaYoutube />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterBottom;
