import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

function ServiceCommon(props) {
  const { imgSrc, title, text, btnText, visit } = props;

  const [hover, setHover] = useState(false);

  const toggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 col-10 mx-auto">
        <div className="card text-center shadow">
          <img src={imgSrc} className="card-img-top" alt={title} />
          <div className="card-body">
            <h4 className="card-title fw-bold text-capitalize"> {title} </h4>
            <p className="card-text"> {text} </p>
            <NavLink
              to={visit}
              className="btn btn-primary"
              onMouseEnter={toggle}
              onMouseLeave={toggle}
            >
              {btnText}
              <span className="angle">
                {hover ? <FaArrowRight /> : <FaAngleRight />}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCommon;
