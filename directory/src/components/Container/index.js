import React from "react";
import Card from "../Card";


function Container(props) {
 const employees = props.employees;
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} >
    {employees.map(employee => (
          <Card
            id={employee.id}
            key={employee.id}
            name={employee.name}
            position={employee.position}
            department={employee.department}
            branch={employee.branch}
            avatarUrl ={employee.avatarUrl}
          />
        ))}
  
  </div>;
}

export default Container;
