function Employee(EmployeesData) {
    return (
        <div className="EmployeeDiv ">
            <div>
                <img
                    className="avatar"
                    src={EmployeesData.avatar}
                    alt="avatar-img"
                />
            </div>
            <div>
                <h2>{EmployeesData.name}</h2>
                <b>Email:</b> {EmployeesData.email}
                <p>
                    <b>Phone:</b> {EmployeesData.phone}
                </p>
                <p>
                    <b>Skills: </b>
                    {EmployeesData.skills}
                </p>
            </div>
        </div>
    );
}
export default Employee;
