import React from "react";
import "./style.css";

function Card(props) {
  return (
    
      <div className="card" key={props.id}   department={props.department} branch={props.branch} >
        <div className="row no-gutters row-cols-3">
          <div className="col-2 " >
            <img src={props.avatarUrl} className="card-img mx-3" alt="..."></img>
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">Name: {props.name}</h5>
              <p className="card-text">Position: {props.position}</p>
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <p className="card-text">Department: {props.department}</p>
              <p className="card-text">Branch: {props.branch}</p>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Card;
