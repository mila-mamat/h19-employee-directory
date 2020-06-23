import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import List from "../List";


function Wrapper(props) {
  return (
    <main className="wrapper" {...props}>
      <Row>
        <Col size="md-4 lg-3" >
          <List role="Sort" items="Name,Department,Branch"/>
          <List role="Filter" category="Department" items="Finance,HR,Operation,Sales"/>
          <List role="Filter" category="Branch" items="ON,BC,QC"/>
        </Col>
        <Col size="md-8 lg-9">
          <Container fluid="true"/>
        </Col>
      </Row>
    </main>
  );
}

export default Wrapper;
