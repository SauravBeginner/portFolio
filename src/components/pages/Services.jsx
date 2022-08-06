import React, { useState } from "react";
import Banner from "./Banner";
import serviceList from "./data";

const Services = () => {
  const [data, setData] = useState([serviceList]);
  return (
    <>
      <section id="services" className="services-mf pt-5 route  mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Services</h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {serviceList.map((currentElement) => (
              <div className="col-md-4" key={currentElement.id}>
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className={currentElement.class}></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">{currentElement.title}</h2>
                    <p className="s-description text-center">
                      {currentElement.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Banner />
    </>
  );
};

export default Services;
