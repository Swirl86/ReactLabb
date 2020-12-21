import Employee from "./Employee";
import employeeData from "../employeeData.json";
import React, { useState } from "react";

function EmployeeList() {
    const initialValue = [
        {
            name: "Lea Jacobsen",
            email: "Lea.Jacobsen@fakeemail.com",
            phone: "0704-5083615",
            skills: "Angular, CSS, HTML, Javascript",
            avatar: "https://i.imgur.com/ebHfuth.png",
        },
        {
            name: "Anna Skomedal",
            email: "Anna.Skomedal@fakeemail.com",
            phone: "0250-3277871",
            skills: "MySQL, Node.js, Express, HTML, CSS, Javascript",
            avatar: "https://i.imgur.com/TUhCrsY.png",
        },
        {
            name: "Tobias Alvestad",
            email: "Tobias.Alvestad@fakeemail.com",
            phone: "0495-4422387",
            skills: "Python, Django, HTML, CSS",
            avatar: "https://i.imgur.com/Q9qFt3m.png",
        },
    ];

    const [employees, setEmployess] = useState(initialValue);
    const [count, setCount] = useState(0);

    function handleAddEmployee() {
        setEmployess(function (prevEmployees) {
            return [...prevEmployees, employeeData[count]];
        });
    }

    return (
        <div>
            <h3>
                <b>Employee List</b>
            </h3>

            <button
                className="button"
                onClick={() => {
                    handleAddEmployee();
                    setCount(count + 1);
                }}
                disabled={count === 3 ? true : false}
            >
                Add Employee
            </button>
            <div>
                {employees.map(function (employee, i) {
                    return (
                        <Employee
                            key={i}
                            name={employee.name}
                            email={employee.email}
                            phone={employee.phone}
                            skills={employee.skills}
                            avatar={employee.avatar}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default EmployeeList;
