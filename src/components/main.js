import React from "react";
import DataTable from "./DataTable";
import SearchBox from "./SearchBox";
import "../styles/main.css";
import employees from "../employees.json";

class Main extends React.Component {
    state = {
        employees: employees,
        sorting: "ascending"
    }
        searchEmployee = e => {
            // props.results.map()
        }
        
        render () {
        return (
            <>
             <SearchBox searchEmployee={this.searchEmployee}/>
             <DataTable sortName={this.sortName} employees={this.state.employees}/>
            </>
        );
    };
}

export default Main;