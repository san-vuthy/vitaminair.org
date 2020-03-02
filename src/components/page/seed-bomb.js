import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./singlePage.css";
import Mardown from "react-markdown";
import Footer from "./footer";

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
      <Container className="container-background">
        <Mardown>{post}</Mardown>
        <div className="text-right">
          <Button variant="outline-secondary">Goto HomePage</Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SinglePage;
