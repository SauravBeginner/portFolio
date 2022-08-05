import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header id="header" className="fixed-top bg-dark">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="/">DevFolio</Link>
          </h1>

          <Link to="/" className="logo">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </Link>
          <nav
            id="navbar"
            className={menuOpen ? "navbar navbar-mobile" : "navbar"}
          >
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="/work">
                  Work
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto " to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <span
              className="mobile-nav-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={menuOpen ? "bi-x" : "bi bi-list"}></i>
            </span>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
