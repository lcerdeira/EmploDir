import React from "react";
import "../styles/dataTable.css";
import employees from "../employees.json";

function DataTable(props){
    state = {
        employees: employees
    };
    return (
        <table>
            <thead>
                <th> ID </th>
                <th> Image </th>
                <th onClick={props.sortName}> Name </th>
                <th> Phone </th>
                <th> Email </th>
                <th> DOB </th>
            </thead>
            <tbody>
                {this.state.employees.map(employee => {
                    return (
                        <tr key={employee.id}>
                            <td> {employee.id} </td>
                            <td> <img src={employee.image} alt="employee"/> </td>
                            <td> {employee.name} </td>
                            <td> {employee.phone} </td>
                            <td> {employee.email} </td>
                            <td> {employee.dob} </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default DataTable;