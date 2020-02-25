import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./singlePage.css";
import Mardown from "react-markdown";

const ecotourism = require("../data/ecotourism.md");

const SinglePage = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(ecotourism)
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
