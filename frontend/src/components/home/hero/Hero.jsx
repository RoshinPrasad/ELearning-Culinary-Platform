import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import videoSource from "./bgvideo.mp4";

const Hero = () => {
  const [headerText, setHeaderText] = useState("aspiring chefs");
  const navigate = useNavigate();

  useEffect(() => {
    let count = 0;
    const texts = [
      "CULINARY TEAMS",
      "HOME COOKS",
      "INDIVIDUALS",
      "PROFESSIONALS",
    ];

    const changeHeaderText = () => {
      setHeaderText(<span style={{ color: "red" }}>{texts[count]}</span>);
      count = (count + 1) % texts.length;
    };

    const intervalId = setInterval(changeHeaderText, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const view = () => {
    navigate("./courses");
  };

  return (
    <>
      <section className="hero">
      <video autoPlay loop muted className="video-bg">
          <source src={videoSource} type="video/mp4" />
          
        </video>
        <div className="container" style={{ marginTop:'-350px' }}>
          <div className="row" style={{ color: "white" }}>
            <Heading
              subtitle="WELCOME TO SK-Cooks"
              title="Best Online Culinary Expertise"
            />
            <p style={{  fontWeight: "bold" }}>
              SK Cooks trains {headerText} <br /> Offering courses in classic
              and next-gen technique <br /> Join our Live Class
            </p>
            <div className="button">
              <button className="primary-btn" style={{ cursor: "pointer",height: '40px',padding: '0 10px', }}>
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button onClick={view} style={{ cursor: "pointer",height: '40px',padding: '0 25px', }}>
                VIEW CLASS <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
