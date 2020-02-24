import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./singlePage.css";
import Mardown from "react-markdown";

const reforestation = require("../data/reforestation.md");
const airwater = require("../data/airWater.md");
const ecotourism = require("../data/ecotourism.md");
const naturalfarming = require("../data/naturalFarming.md");
const seedbomb = require("../data/seedBomb.md");

const SinglePage = () => {
  const [post, setPost] = useState("");

  // useEffect(() => {
  //   fetch(airwater)
  //     .then(res => res.text())
  //     .then(response => setPost(response))
  //     .catch(err => setPost(err));
  // });
  useEffect(() => {
    fetch(seedbomb)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  });
  return (
    <div id="single-page">
      <Container className="container-background">
        <Mardown>{post}</Mardown>
        <div className="text-right">
          <Button variant="outline-secondary">Goto HomePage</Button>
        </div>
      </Container>
    </div>
  );
};

export default SinglePage;
