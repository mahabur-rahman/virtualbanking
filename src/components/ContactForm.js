import React, { useState } from "react";

function ContactForm() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const inputEventChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Email : ${userInfo.email} Password : ${userInfo.password}`);
  };

  return (
    <>
      <section id="contactForm">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-7 mx-auto">
              <div className="contact_form_box">
                <form onSubmit={formSubmit}>
                  <h4 className="text-center">Sign in to your account</h4>

                  <div className="mb-3 mt-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      name="email"
                      value={userInfo.email}
                      onChange={inputEventChange}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="xyz@gmail.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      name="password"
                      value={userInfo.password}
                      onChange={inputEventChange}
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="*****"
                    />
                  </div>

                  <div className="mb-3">
                    <button
                      type="submit"
                      className="form-control"
                      id="password"
                    >
                      Continue
                    </button>
                  </div>

                  <div className="mb-3 text-center mt-2">
                    <button onClick={() => alert("Not working 🙂")}>
                      Forgot password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
