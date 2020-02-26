import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            {/* About Company */}
            <div className="col-lg-5 col-sx-12 about-company">
              <h2 className="">Vitamin Air</h2>
              <p className="pr-5 text-white-50">
                lorem Search for the keywords to learn more about each warning.
              </p>
              <p>
                <a href="#">
                  <i className="fa fa-facebook-square mr-1"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin-square mr-1"></i>
                </a>
              </p>
            </div>

            {/* coorperation */}
            <div className="col-lg-3 col-sx-12 cooperation">
              <h4 className="mt-lg-0 mt-sm-3">Coorperation</h4>
              <ul className="m-0 p-0">
                <li>
                  <a href="https://koompi.com/">Koompi Cambodia</a>
                </li>
                <li>
                  <a href="https://www.vitaminair.org/"> Vitamin Air </a>
                </li>
                <li>
                  <a href="https://smallworldventure.com/">
                    Small World Venture
                  </a>
                </li>
                <li>
                  <a href="https://pionux.org/"> Pionux</a>
                </li>
              </ul>
            </div>
            {/* Location */}
            <div className="col-lg-4 col-sx-12 location">
              <h4 className="mt-lg-0 mt-sm-3">Location</h4>
              <p className="pr-5 text-white-50">
                #92 E1K, St.19m Doun Penh, Phnom Penh, Cambodia
              </p>
              <p className="mb-0">
                <i className="fa fa-phone mr-3"></i>
                (+855) 12-238593
              </p>
              <p>
                <i className="fa fa-envelop-o mr-3"></i>
                infor@yahoo.com
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col copyright">
              <p>
                <div className="text-white-50">
                  © 2020. All Rights Reserved.
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
