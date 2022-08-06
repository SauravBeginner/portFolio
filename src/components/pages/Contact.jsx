import React, { useState } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");
  return (
    <>
      <section
        id="contact"
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send Message Us</h5>
                      </div>
                      <div>
                        <div className="php-email-form">
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  onChange={(ev) => {
                                    setName(ev.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  onChange={(ev) => {
                                    setEmail(ev.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  onChange={(ev) => {
                                    setSubject(ev.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  placeholder="Message"
                                  onChange={(ev) => {
                                    setMessage(ev.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 text-center my-3">
                              <div className="loading">Loading</div>
                              <div className="error-message"></div>
                              <div className="sent-message">
                                Your message has been sent. Thank you!
                              </div>
                            </div>
                            <div className="col-md-12 text-center">
                              <input
                                type="button"
                                className="button button-a button-big button-rouded"
                                value=" Send Message"
                                onClick={async () => {
                                  var fd = new FormData();

                                  fd.append("name", name);
                                  fd.append("email", email);
                                  fd.append("subject", subject);
                                  fd.append("message", message);
                                  var resp = await fetch(
                                    "http://localhost:5000/contact/enquiry",
                                    {
                                      method: "POST",
                                      body: fd,
                                    }
                                  );
                                  var data = await resp.json();
                                  console.log(data);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis dolorum dolorem soluta quidem expedita
                          aperiam aliquid at. Totam magni ipsum suscipit amet?
                          Autem nemo esse laboriosam ratione nobis mollitia
                          inventore?
                        </p>
                        <ul className="list-ico">
                          <li>
                            <span className="bi bi-geo-alt"></span> 329
                            WASHINGTON ST BOSTON, MA 02108
                          </li>
                          <li>
                            <span className="bi bi-phone"></span> (617) 557-0089
                          </li>
                          <li>
                            <span className="bi bi-envelope"></span>{" "}
                            contact@example.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <Link href="">
                              <span className="ico-circle">
                                <i className="bi bi-facebook"></i>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <span className="ico-circle">
                                <i className="bi bi-instagram"></i>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <span className="ico-circle">
                                <i className="bi bi-twitter"></i>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="">
                              <span className="ico-circle">
                                <i className="bi bi-linkedin"></i>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default Contact;
