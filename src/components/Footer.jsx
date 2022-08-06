import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="copyright-box">
                <p class="copyright">
                  &copy; Copyright <strong>DevFolio</strong>. All Rights
                  Reserved
                </p>
                <div class="credits">
                  Designed by
                  <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
