import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import Form from "../Form";
import Card from "../Card";

function Wrapper(props) {
  return (
    <main className="wrapper" {...props}>
      <Row >
        <Col size="md-5 lg-3" >
        <Form />
       
        </Col>
        <Col size="md-7 lg-9">
        <Container />
        </Col>
      </Row>
    </main>
  );
}

export default Wrapper;
