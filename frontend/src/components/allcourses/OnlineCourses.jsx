import React from "react";
import { useLocation } from "react-router-dom";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <section className="online" style={{ marginTop: "200px" }}>
        <div className="container">
          <Heading subtitle="CLASSES" title="Browse Our Online Classes" />
          <div className="content grid3">
            {online.slice(0, isHomePage ? 6 : online.length).map((val) => (
              <div className="box" key={val.courseName}>
                <div className="img">
                  <img src={val.cover} alt={val.courseName} />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span className="border-black">{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
