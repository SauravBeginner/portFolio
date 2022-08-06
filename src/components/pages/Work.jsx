import React, { useState } from "react";
import Testimonial from "./Testimonial";
import workApi from "./workApi";
import { Link } from "react-router-dom";
const Work = () => {
  const [portfolio, setPortfolio] = useState([workApi]);

  return (
    <>
      <section id="work" class="portfolio-mf sect-pt4 route mt-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">Portfolio</h3>
                <p class="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            {workApi.map((currentElement) => (
              <div class="col-md-4">
                <div class="work-box">
                  <Link
                    to={currentElement.img}
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                  >
                    <div class="work-img">
                      <img src={currentElement.img} alt="" class="img-fluid" />
                    </div>
                  </Link>
                  <div class="work-content">
                    <div class="row">
                      <div class="col-sm-8">
                        <h2 class="w-title">{currentElement.title}</h2>
                        <div class="w-more">
                          <span class="w-ctegory">
                            {currentElement.catagory}
                          </span>
                          /<span class="w-date">{currentElement.date}</span>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="w-like">
                          <Link to="portfolio-details.html">
                            <span class="bi bi-plus-circle"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonial />
    </>
  );
};

export default Work;
