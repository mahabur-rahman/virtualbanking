import React from "react";
import { NavLink } from "react-router-dom";

function FooterCommon(props) {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-5 mx-auto">
        <div className="footer_content">
          <h5>{props.title}</h5>
          <ul className="mt-3">
            <li>
              <NavLink to="/" className="text-decoration-none">
                {props.list1}
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-decoration-none">
                {props.list2}
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-decoration-none">
                {props.list3}
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-decoration-none">
                {props.list4}
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-decoration-none">
                {props.list5}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterCommon;
