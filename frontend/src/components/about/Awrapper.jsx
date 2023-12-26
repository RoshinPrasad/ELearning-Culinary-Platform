import React from "react";
import { awrapper } from "../../dummydata";

const Awrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="container grid">
          {awrapper.map((val) => {
            return (
              <div className="box flex">
                <div className="img">
                  <img src={val.cover} alt="" style={{ color: "aqua" }} />
                </div>
                <div className="text-dark">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Awrapper;
