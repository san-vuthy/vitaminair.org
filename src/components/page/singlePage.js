import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./page.css";

const SinglePage = () => {
  return (
    <Container>
      <Form className="header">
        <h3>Basics</h3>
        <Form.Group controlId="part1">
          <p>
            This page is just a sampler. Download the Keybase app and use the
            built-in help:
          </p>
          <Form.Control as="textarea" rows="5" />
        </Form.Group>

        <Form.Group controlId="part2">
          <Form.Label className="bold">Common commands</Form.Label>
          <Form.Control as="textarea" rows="13" />
        </Form.Group>

        <Form.Group controlId="part3">
          <Form.Label className="bold">
            Looking up other people & following
          </Form.Label>
          <Form.Control as="textarea" rows="7" />
        </Form.Group>

        <Form.Group controlId="part4">
          <Form.Label className="bold">
            Why follow? (previously called "tracking")
          </Form.Label>
          <p>
            If you follow someone, subsequent commands will work without
            requiring more input from you:
          </p>
          <Form.Control as="textarea" rows="5" />
          <p>
            And if anything about your target has changed since you last
            followed them, you'll get a meaningful error.
          </p>
        </Form.Group>

        <Form.Group controlId="part5">
          <Form.Label className="bold">Device adding + removing</Form.Label>
          <p>
            Every computer you install Keybase on gets a device-specific key.
            This is a very big improvement over the old PGP model, where you had
            to move a private key around.
          </p>
          <Form.Control as="textarea" rows="6" />
        </Form.Group>

        <Form.Group controlId="part6">
          <Form.Label className="bold">Paper keys</Form.Label>
          <p>
            When you install Keybase for the first time, you'll be asked to
            generate a paper key. It's a full-powered key, just like a device
            key.
          </p>
          <p>
            You can have as many paper keys as you like. You should have at
            least 1, until Keybase releases a mobile app.
          </p>

          <Form.Control as="textarea" rows="5" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SinglePage;
