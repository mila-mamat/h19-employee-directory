import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    
      <div class="card"{...props}  >
        <div class="row no-gutters row-cols-3">
          <div class="col-2 " >
            <img src="./assets/avatar.png" class="card-img" alt="..."></img>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Name: {props.name}</h5>
              <p class="card-text">Position: {props.position}</p>
            </div>
          </div>
          <div class="col">
            <div class="card-body">
              <p class="card-text">Department: {props.department}</p>
              <p class="card-text">Branch: {props.branch}</p>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Card;
