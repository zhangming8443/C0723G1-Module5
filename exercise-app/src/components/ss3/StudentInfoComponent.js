import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const studentInformation = ({students}) => {

    const studentList = [
        {
            id: 1,
            name: "John",
            age: "20",
            address: "America"
        },
        {
            id: 2,
            name: "Jane",
            age: "21",
            address: "Asia"
        },
        {
            id: 3,
            name: "Mary",
            age: "22",
            address: "Europe"
        },
        {
            id: 4,
            name: "John",
            age: "20",
            address: "America"
        }
    ]

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {studentList.map(student => (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default studentInformation;