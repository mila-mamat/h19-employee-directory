import React, { Component } from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";
import Search from "../Search";
import Container from "../Container";
import List from "../List";
import Employees from "../../employees.json";

class Wrapper extends Component {
  // Setting the component's initial state
  state = {
    filterCategory: "",
    employees: Employees,
  };

  handleChange = (event) => {
    const role = event.target.getAttribute("role");
    // sort by name, department or branch
    if (role === "Sort") {
      this.handleSort(event);
    } else if (role === "Filter") {
      // filter by department and/or branch
      this.handleFilter(event);
    } else if (role === "Search") {
      //search employees by name
      this.handleSearch(event);
    }
  };

  //sort employees by name, department or branch
  handleSort = (event) => {
    const sortKey = event.target.getAttribute("id").toLowerCase();
    const sortedEmployees = this.state.employees.sort(
      this.dynamicSort(sortKey)
    );
    this.setState({ employees: sortedEmployees });
  };
   
  // function to sort employees by name, department and branch
  dynamicSort = (property) => {
    return function (a, b) {
      return a[property].localeCompare(b[property]);
    };
  };

  //filter employees by department and/or branch
  handleFilter = (event) => {
    //get the category : department , branch
    const category = event.target.getAttribute("category").toLowerCase();
    // get the filter key: the department/ branch name
    const filterKey = event.target.getAttribute("id");
    let filteredEmployees;

    if (filterKey === "Clear Filter") {
      // clear filter category and reset the employees
      this.handleClearFilter(event);
    } else {
      //taking filter cumulation into consideration(eg: BC+HR, BC+ON)
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
  };

  // search employees by name
  handleSearch = (event) => {
    // get the eployee name searched
    let searchKey = event.target.value;
     // map through the employees name to find names include the searchKey
    let searchResult =[]
     Employees.forEach(employee =>{
       if(employee.name.toLowerCase().includes(searchKey.toLowerCase()))  searchResult.push(employee)
     })
    this.setState({ employees: searchResult });
  };

  //lift all filters that are applied before
  handleClearFilter = (event) => {
    // reset the search box if user is clearing name search
    let inputBox = event.target.innerHTML
    if(inputBox === "Clear") {
      event.target.previousSibling.reset()
    }
    //reset the employees info and filters saved 
    this.setState({ employees: Employees, filterCategory: "" });
  };



  render() {
    return (
      <main className="wrapper">
        <Row>
          <Col size="md-4 lg-3">
            <Search
              role="Search"
              onChange={this.handleChange}
              onClick={this.handleClearFilter}
            />
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
