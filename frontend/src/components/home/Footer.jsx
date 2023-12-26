import React, { useState } from "react";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      setErrorMessage("Please enter your Email.");
      return;
    }
    setIsSubscribed(true);
  };

  return (
    <footer className="text-center text-lg-start border border-white mt-xl-5 pt-4 bg-black">
      <div className="container p-4" style={{ color: "red" }}>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4 text-light">SK-COOKS</h5>

            <ul className="list-unstyled mb-4">
              <br />
              <li>
                <a href="#!" className="text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Collections
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Environmental philosophy
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Artist collaborations
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Assistance</h5>

            <ul className="list-unstyled">
              <br />
              <li>
                <a href="#!" className="text-white">
                  Contact us
                </a>
              </li>

              <li>
                <a href="#!" className="text-white">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Payment
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Careers</h5>

            <ul className="list-unstyled">
              <br />
              <li>
                <a href="#!" className="text-white">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Sign up to our newsletter</h5>

            <div className="form-outline form-white mb-4">
              <input
                type="email"
                id="form5Example2"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage(""); 
                }}
              />
              <label className="form-label" htmlFor="form5Example2">
                Email address
              </label>
            </div>

            <button
              type="button"
              className="btn btn-outline-white btn-block"
              style={{ color: "white", backgroundColor: "green" }}
              onClick={handleSubscribe}
            >
              SUBSCRIBE
            </button>

            {errorMessage && (
              <div className="text-danger mt-2">{errorMessage}</div>
            )}

            {isSubscribed && (
              <div className="text-light mt-2">Subscribed! Thank you.</div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center p-3 border-top border-white text-gray">
        © 2023 Copyright:
        <a className="text-white" href="https://github.com/adhulyamaya">
          &nbsp;skcooks69@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
