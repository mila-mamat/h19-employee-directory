import React from "react";
import Card from "../Card";
import employees from "../../employees.json";

function Container(props) {

  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} >
    {employees.map(employee => (
          <Card
            id={employee.id}
            key={employee.id}
            name={employee.name}
            position={employee.position}
            department={employee.department}
            branch={employee.branch}
          />
        ))}
  
  </div>;
}

export default Container;
