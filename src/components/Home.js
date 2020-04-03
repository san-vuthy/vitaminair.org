import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import data from "./data/index.json";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function home() {
  const DisplayData = () => {
    return data.map((res, index) => {
      console.log(res);

      if (index % 2 === 0) {
        return (
          <div className="cover1">
            <div className={res.className}>
              <div className="container">
                <div className="certain">
                  <div className="cover-description">
                    <h1 className="header">{res.title}</h1>
                    <h4 className="subtitle">{res.subTitle}</h4>
                    <p className="description">
                      {res.desc.substring(0, 325)}...
                    </p>
                    <Link to={res.link}>
                      <Button className="readmore" variant="warning">
                        Read more >>
                      </Button>
                    </Link>
                  </div>
                  <div className="rounded float-right">
                    <img
                      className="img-right"
                      alt={res.title}
                      src={`http://localhost:3000${res.logo}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className={`cover2 ${res.className}`}>
            <div className="">
              <div className="container">
                <div className="certain">
                  <div className="rounded float-left">
                    <img
                      className="img-left"
                      alt={res.title}
                      src={`http://localhost:3000${res.logo}`}
                    />
                  </div>
                  <div className="cover-description">
                    <h1 className="header">{res.title}</h1>
                    <h4 className="subtitle">{res.subTitle}</h4>
                    <p className="description">
                      {res.desc.substring(0, 325)}...
                    </p>
                    <Link to={res.link}>
                      <Button className="readmore" variant="warning">
                        Read more >>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <DisplayData />
      <Footer />
    </div>
  );
}
