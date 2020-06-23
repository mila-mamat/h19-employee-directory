import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div className="card" {...props} />
  );
}

export default Card;
