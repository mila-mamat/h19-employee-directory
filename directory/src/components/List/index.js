import React from "react";
import "./style.css";

function List(props) {
  const items = props.items.split(",")
  return (
    <div className="list-group mx-2 my-3">
      <button
        type="button"
        className="list-group-item list-group-item-action bg-primary text-white header"
      >
        {props.role} Employee By {props.category}:
      </button>

      {items.map(item => (
        <button className='list-group-item list-group-item-action' >
          {item}
        </button>
      ))}
     
    </div>
  );
}

export default List;
