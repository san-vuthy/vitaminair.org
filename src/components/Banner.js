import React from "react";
import BannerData from "./data/banner.json";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


function Banner() {
  return (
      <div id="banner-background">
        <Jumbotron id="banner" fluid className="p-3 mb-2 bg-success text-white">
            <Container className="text-center">
                <h1 id="header-banner">VitaminAir</h1> 
                <div id="banner-text">
                    {BannerData.map((detail, index) => {
                        return <p>{detail.p1}<tr>{detail.p2}</tr></p>
                    })}
                </div>
            </Container>
        </Jumbotron>
    </div>
  );
}

export default Banner;
