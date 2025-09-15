import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "./config.js";
import "./style.css";

const Employee = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
    contact: ""
  });
  const [idToFetch, setIdToFetch] = useState("");
  const [fetchedEmployee, setFetchedEmployee] = useState(null);
  const [message, setMessage] = useState("");

  const baseUrl = `${config.url}/employee-api`;

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  // ✅ Fetch all employees
  const fetchAllEmployees = async () => {
    try {
      const res = await axios.get(`${baseUrl}/all`);
      setEmployeeList(res.data);
    } catch (error) {
      setMessage("Failed to fetch employees.");
    }
  };

  // ✅ Handle form change
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // ✅ Add employee
  const addEmployee = async () => {
    try {
      await axios.post(`${baseUrl}/add`, employee);
      setMessage("Employee added successfully.");
      fetchAllEmployees();
      resetForm();
    } catch (error) {
      setMessage("Error adding employee.");
    }
  };

  // ✅ Delete employee
  const deleteEmployee = async (id) => {
    try {
      const res = await axios.delete(`${baseUrl}/delete/${id}`);
      setMessage(res.data);
      fetchAllEmployees();
    } catch (error) {
      setMessage("Error deleting employee.");
    }
  };

  // ✅ Get employee by ID
  const getEmployeeById = async () => {
    try {
      const res = await axios.get(`${baseUrl}/get/${idToFetch}`);
      setFetchedEmployee(res.data);
      setMessage("");
    } catch (error) {
      setFetchedEmployee(null);
      setMessage("Employee not found.");
    }
  };

  const resetForm = () => {
    setEmployee({ id: "", name: "", department: "", contact: "" });
  };

  return (
    <div className="employee-container">
      {message && (
        <div
          className={`message-banner ${
            message.toLowerCase().includes("error") ? "error" : "success"
          }`}
        >
          {message}
        </div>
      )}

      <h2>Employee Manager</h2>

      {/* Form */}
      <div>
        <h3>Add Employee</h3>
        <div className="form-grid">
          <input
            type="number"
            name="id"
            placeholder="ID"
            value={employee.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={employee.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={employee.department}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={employee.contact}
            onChange={handleChange}
          />
        </div>
        <button className="btn-blue" onClick={addEmployee}>
          Add Employee
        </button>
      </div>

      {/* Fetch by ID */}
      <div>
        <h3>Get Employee By ID</h3>
        <input
          type="number"
          value={idToFetch}
          onChange={(e) => setIdToFetch(e.target.value)}
          placeholder="Enter Employee ID"
        />
        <button className="btn-blue" onClick={getEmployeeById}>
          Fetch
        </button>

        {fetchedEmployee && (
          <div>
            <h4>Employee Found:</h4>
            <pre>{JSON.stringify(fetchedEmployee, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* All employees */}
      <div>
        <h3>All Employees</h3>
        {employeeList.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>{emp.contact}</td>
                    <td>
                      <button
                        className="btn-red"
                        onClick={() => deleteEmployee(emp.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
