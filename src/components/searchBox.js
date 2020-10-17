import React from "react";
import "../styles/searchBox.css";

function SearchBox(props) {
    return (
        <div className="search">
            <input
            type="text" placeholder="Search Here" onChange= {(e)=>
                props.searchEmployee(e)}
            />
        </div>
    )
}

export default SearchBox;

