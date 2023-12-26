import React from "react";
import { useNavigate } from "react-router-dom";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { videoData } from "../../dummyvid"; 

const HAbout = () => {
const navigate = useNavigate()

const enroll=()=> {
  navigate('/courses')
}

  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <br /><br />
          <Heading subtitle="PREMIUM CLASSES" title="explore our popular online classes" />

          <div className="coursesCard">
            <div className="grid2">
              {videoData.slice(0, 3).map((video) => (
                <div className="items" key={video.id}>
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        
                        <video autoPlay loop muted width="100%">
                          <source src={process.env.PUBLIC_URL + video.videoSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    <div className="text">
                      <h1 style={{ color: 'aqua' }}>{video.title}</h1>
                      <p>{video.description}</p>
                    </div>
                  </div>
                  <button className="outline-btn" onClick={enroll}>ENROLL NOW!</button>
                </div>
              ))}
            </div>
          </div>
          <p className="center-text">
  Experience the pinnacle of learning with our latest and premium features, exclusively crafted for you.
  As a bonus, enjoy additional extras that will spice up your culinary adventure. Seize the opportunity,
  and let the art of cooking unfold in extraordinary ways. Your gastronomic masterpiece
  awaits – Enroll today and savor the extraordinary!
</p>

        </div>
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;