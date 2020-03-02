import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./singlePage.css";
import Mardown from "react-markdown";
import Footer from "./Footer";

const airwater = require("../data/airWater.md");
const ecotourism = require("../data/ecotourism.md");
const naturalFarming = require("../data/naturalFarming.md");
const reforestation = require("../data/reforestation.md");
const seedbomb = require("../data/seedBomb.md");

const SinglePage = () => {
  const [post, setPost] = useState("");
  useEffect(() => {
    fetch(seedbomb)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  });
  return (
    <div id="single-page">
      <div className="ptb-5 detail ">
        <Container className="container-background">
          <Mardown>{post}</Mardown>
          <div className="text-right">
            <Button variant="outline-success">Goto HomePage</Button>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
