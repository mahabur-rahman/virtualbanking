import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import NavbarData from "./NavbarData";

function Navbar() {
  const [signIn] = useState({
    btnText: "Sign In",
    visit: "/sign-up",
  });

  return (
    <>
      <header id="header">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <FaReact className="animated__logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <FaBars className="bars" />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 my-3 my-lg-0">
                {NavbarData.map((navItem) => (
                  <li className="nav-item mx-2" key={navItem.id}>
                    <NavLink
                      exact
                      activeClassName="active__menu"
                      className="nav-link"
                      aria-current="page"
                      to={navItem.visit}
                    >
                      {navItem.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <form className="d-flex py-3 py-lg-0">
                <NavLink
                  to="/sign-in"
                  className="btn btn-outline-success text-dark"
                  type="submit"
                >
                  {signIn.btnText}
                </NavLink>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
