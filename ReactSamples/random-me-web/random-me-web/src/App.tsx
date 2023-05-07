import React, { FC, createContext, useState } from "react";
import "./App.css";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const App: FC = () => {
  return (
    <div className="App">
      <h2>Hello React world!</h2>
      <Container>
        <Row>
          <Col>
            <Example />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const Example = () => {
  return (
    <>
      <Alert variant="info">
        <Alert.Heading>This is a React Boostrap alert </Alert.Heading>
        <p>If it looks nice then bootstrap is installed!</p>
      </Alert>
    </>
  );
};

export default App;
