import React from "react";
import "../blog/blog.css";
import { blog } from "../../dummydata";
import Heading from "../common/heading/Heading";

const Hblog = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='OUR BLOG' title='RECENT FROM BLOG' />
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div className='itemsd shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span className="d-flex flex-column align-items-center">
                      <i className="fa fa-user m-6"></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span className="d-flex flex-column align-items-center">
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span className="d-flex flex-column align-items-center">
                      <i className='fa fa-comments'></i>
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
