import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const enroll = () => {
    navigate("./courses");
  };

  return (
    <>
      <Head />
      <header style={{ height: "80px" }}>
        <nav className="flexSB" style={{ height: "60px" }}>
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Classes</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div
            className="start"
            onClick={enroll}
            style={{ cursor: "pointer" }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "aqua";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#1eb2a6";
            }}
          >
            <div
              className="button"
              onClick={enroll}
              
            >
              GET ENROLLED&nbsp;<i className="fa fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars">dfd</i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
