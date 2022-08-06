import React from "react";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <section id="blog" class="blog-mf sect-pt4 route mt-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">Blog</h3>
                <p class="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card card-blog">
                <div class="card-img">
                  <Link href="blog-single.html">
                    <img src="assets/img/post-1.jpg" alt="" class="img-fluid" />
                  </Link>
                </div>
                <div class="card-body">
                  <div class="card-category-box">
                    <div class="card-category">
                      <h6 class="category">Travel</h6>
                    </div>
                  </div>
                  <h3 class="card-title">
                    <Link href="blog-single.html">
                      See more ideas about Travel
                    </Link>
                  </h3>
                  <p class="card-description">
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus. Praesent sapien massa, convallis a pellentesque
                    nec, egestas non nisi.
                  </p>
                </div>
                <div class="card-footer">
                  <div class="post-author">
                    <Link href="#">
                      <img
                        src="assets/img/testimonial-2.jpg"
                        alt=""
                        class="avatar rounded-circle"
                      />
                      <span class="author">Morgan Freeman</span>
                    </Link>
                  </div>
                  <div class="post-date">
                    <span class="bi bi-clock"></span> 10 min
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-blog">
                <div class="card-img">
                  <Link href="blog-single.html">
                    <img src="assets/img/post-2.jpg" alt="" class="img-fluid" />
                  </Link>
                </div>
                <div class="card-body">
                  <div class="card-category-box">
                    <div class="card-category">
                      <h6 class="category">Web Design</h6>
                    </div>
                  </div>
                  <h3 class="card-title">
                    <Link href="blog-single.html">
                      See more ideas about Travel
                    </Link>
                  </h3>
                  <p class="card-description">
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus. Praesent sapien massa, convallis a pellentesque
                    nec, egestas non nisi.
                  </p>
                </div>
                <div class="card-footer">
                  <div class="post-author">
                    <Link href="#">
                      <img
                        src="assets/img/testimonial-2.jpg"
                        alt=""
                        class="avatar rounded-circle"
                      />
                      <span class="author">Morgan Freeman</span>
                    </Link>
                  </div>
                  <div class="post-date">
                    <span class="bi bi-clock"></span> 10 min
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card card-blog">
                <div class="card-img">
                  <Link href="blog-single.html">
                    <img src="assets/img/post-3.jpg" alt="" class="img-fluid" />
                  </Link>
                </div>
                <div class="card-body">
                  <div class="card-category-box">
                    <div class="card-category">
                      <h6 class="category">Web Design</h6>
                    </div>
                  </div>
                  <h3 class="card-title">
                    <Link href="blog-single.html">
                      See more ideas about Travel
                    </Link>
                  </h3>
                  <p class="card-description">
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus. Praesent sapien massa, convallis a pellentesque
                    nec, egestas non nisi.
                  </p>
                </div>
                <div class="card-footer">
                  <div class="post-author">
                    <Link href="#">
                      <img
                        src="assets/img/testimonial-2.jpg"
                        alt=""
                        class="avatar rounded-circle"
                      />
                      <span class="author">Morgan Freeman</span>
                    </Link>
                  </div>
                  <div class="post-date">
                    <span class="bi bi-clock"></span> 10 min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
