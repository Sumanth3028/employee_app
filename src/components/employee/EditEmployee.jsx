import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editEmployee,
  viewEmployee,
} from "../../features/EmployeeSlices/EmployeeSlice";

const EditEmployee = (props) => {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [number, setNumber] = useState();
  const [department, setDepartment] = useState();

  const dispatch = useDispatch();

  const { employee } = useSelector((store) => store.employee);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employeeDetails = {
      firstname,
      lastname,
      number,
      department,
    };
    let id = props.id;
    dispatch(editEmployee({ id, employeeDetails }));
  };

  return (
    <div className="mx-8 my-5 sticky">
      <div
        className={`${
          props.open
            ? "ml-[170px] mt-[35px] h-[85%] w-[850px] shadow-lg border rounded-sm"
            : "ml-[260px] mt-[35px] h-[85%] w-[850px] shadow-lg border rounded-sm"
        }`}
      >
        <h1 className="text-center text-3xl font-semibold font-sans py-3 mb-8">
          Employee Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first name" className="ml-[58px] text-lg ">
              First Name
            </label>
          </div>
          <input
            type="text"
            placeholder={employee?.firstName}
            className="ml-14 mt-2 w-[80%] border px-3 text-center  mb-4 py-2 rounded-md "
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <div>
            <label htmlFor="last name" className="ml-[58px]  text-lg">
              Last Name
            </label>
          </div>
          <input
            type="text"
            placeholder={employee?.lastName}
            className="ml-14 mt-2 w-[80%] border px-3 text-center mb-4 py-2 rounded-md "
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />

          <div>
            <label htmlFor="email" className="ml-[58px]  text-lg">
              Phone number
            </label>
          </div>
          <input
            type="number"
            placeholder={employee?.phoneNumber}
            className="ml-14 mt-2 w-[80%] border px-3 text-center mb-4 py-2 rounded-md "
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div>
            <label htmlFor=" Department" className="ml-[58px]  text-lg">
              Department
            </label>
          </div>
          <select
            className="ml-14 mt-2 w-[80%] border px-3 text-center py-2 mb-4 rounded-md "
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value=" ">{employee?.department}</option>
            <option value="DevOps ">DevOps</option>
            <option value="Software Development">Software Development</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="Sales and Marketing">Sales and Marketing</option>
            <option value="Cloud Services">Cloud Services</option>
            <option value="AI and Machine Learning">
              AI and Machine Learning
            </option>
          </select>

          <div>
            <button className="items-center px-[100px] py-3 bg-green-400 text-xl font-semibold ml-[234px] mt-7  rounded-md">
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
