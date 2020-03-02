import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function Banner() {
  return (
    <div id="banner-background">
      <Jumbotron id="banner" fluid className="p-3 mb-2 bg-success text-white">
        <Container className="text-center">
          <h1 id="header-banner">VitaminAir</h1>
          <div id="banner-text">
            <p>
              This is the project that rebuild the forest & keep it for the next
              generation. Longer life of the nature is the way we do for the
              next generation of humans beings.
            </p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Banner;
