import React from "react";
import Card from "../Card";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} >
    <Card>Employee</Card>
    <Card>Employee</Card>
    <Card>Employee</Card>
    <Card>Employee</Card>
  
  </div>;
}

export default Container;
