import React from "react";
import FooterCommon from "./FooterCommon";
import FooterList from "./FooterList";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto">
              <div className="row gy-5">
                {/* -------------- */}
                {FooterList.map((list) => {
                  return (
                    <FooterCommon key={list.id} title={list.title} {...list} />
                  );
                })}
                {/* -------------- */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterBottom />
    </>
  );
}

export default Footer;
