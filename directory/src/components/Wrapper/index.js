import React, { Component } from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import List from "../List";
import Employees from "../../employees.json";

class Wrapper extends Component {
  // Setting the component's initial state
  state = {
    filterCategory: "",
    employees: Employees,
  };

  // function to sort employees by name, department and branch
  dynamicSort = (property) => {
    return function (a, b) {
      return a[property].localeCompare(b[property]);
    };
  };

  handleChange = (event) => {
    const role = event.target.getAttribute("role");
    // sort by name, department or branch
    if (role === "Sort") {
      const sortKey = event.target.getAttribute("id").toLowerCase();
      const sortedEmployees = this.state.employees.sort(
        this.dynamicSort(sortKey)
      );
      this.setState({ employees: sortedEmployees });
    } else {  // filter by department and/or branch
      //get the category : department , branch
      const category = event.target.getAttribute("category").toLowerCase();
      // get the filter key: the department/ branch name
      const filterKey = event.target.getAttribute("id");
      let filteredEmployees;

      if (filterKey === "Clear Filter") {
        // clear filter category and reset the employees
        this.setState({ employees: Employees, filterCategory: "" });
      } else {//taking filter cumulation into consideration(eg: BC+HR, BC+ON)
        //if the filters are in the same category, then lift the previous filter (eg:BC + ON)
        if (this.state.filterCategory === category) {
          filteredEmployees = Employees.filter(
            (event) => event[category] === filterKey
          );
        } else {
          // if filters doesn't conflict, execute filter on the filtered employees (eg:BC + HR)
          filteredEmployees = this.state.employees.filter(
            (event) => event[category] === filterKey
          );
        }
        this.setState({
          employees: filteredEmployees,
          filterCategory: category,
        });
      }
    }
  };

  render() {
    return (
      <main className="wrapper">
        <Row>
          <Col size="md-4 lg-3">
            <List
              role="Sort"
              items="Name,Department,Branch"
              onClick={this.handleChange}
            />
            <List
              role="Filter"
              category="Department"
              items="Clear Filter,Finance,HR,Operation,Sales"
              onClick={this.handleChange}
            />
            <List
              role="Filter"
              category="Branch"
              items="Clear Filter,ON,BC,QC"
              onClick={this.handleChange}
            />
          </Col>
          <Col size="md-8 lg-9">
            <Container fluid="true" employees={this.state.employees} />
          </Col>
        </Row>
      </main>
    );
  }
}

export default Wrapper;
