import React from "react";
import { Link, useLocation } from "react-router-dom";

const Back = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <section className='back'>
        <h2 className="text-dark">
          <Link to="/">Home</Link> / {location.pathname.split("/")[1]}
        </h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Back;
