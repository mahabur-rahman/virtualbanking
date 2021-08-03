import React from "react";
import ServiceCommon from "../components/ServiceCommon";
import { ServiceData } from "../components/ServiceData";

function Services() {
  return (
    <>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="services_heading text-center">
                <h2>Our Services</h2>
              </div>
            </div>
            <div className="row gy-4 mt-5">
              {/* ------------- */}
              {ServiceData.map((service) => (
                <ServiceCommon
                  key={service.id}
                  imgSrc={service.imgSrc}
                  title={service.title}
                  text={service.text}
                  btnText={service.btnText}
                  visit={service.visit}
                />
              ))}
              {/* ------------- */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
