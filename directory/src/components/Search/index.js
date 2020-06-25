import React from "react";

function Search(props) {
  return (
    <div className="m-2" >
    <form className="form-inline d-inline">
      <input
        role={props.role}
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search by name"
        aria-label="Search"
        onChange={props.onChange}
      ></input>
    </form>
     <button className="btn btn-outline-success d-inline" onClick={props.onClick}>
     Clear
   </button>
   </div>
  );
}

export default Search;
