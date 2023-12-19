import React, { useState } from "react";
import { addemployee } from "../../features/EmployeeSlices/EmployeeSlice";
import { useDispatch } from "react-redux";

const AddEmployee = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [department, setDepartment] = useState("");

  const dispatch = useDispatch();
  // const employee = useSelector((store) => store.employee);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employeeDetails = { firstname, lastname, email, number, department };
    dispatch(addemployee(employeeDetails));
  };

  return (
    <div className="mx-8 my-5 sticky">
      <div
        className={`${
          props.open
            ? "ml-[170px] mt-[35px] h-[92%] w-[850px] shadow-lg border rounded-sm"
            : "ml-[260px] mt-[35px] h-[92%] w-[850px] shadow-lg border rounded-sm"
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
            placeholder="Enter first name"
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
            placeholder="Enter Last name"
            className="ml-14 mt-2 w-[80%] border px-3 text-center mb-4 py-2 rounded-md "
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <div>
            <label htmlFor="email" className="ml-[58px]  text-lg">
              Email
            </label>
          </div>
          <input
            type="email"
            placeholder="Enter email id"
            className="ml-14 mt-2 w-[80%] border px-3 text-center mb-4 py-2 rounded-md "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <label htmlFor="email" className="ml-[58px]  text-lg">
              Phone number
            </label>
          </div>
          <input
            type="number"
            placeholder="Enter phone number"
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
            <button className="items-center px-[100px] py-3 bg-green-400 text-xl font-semibold ml-[234px] mt-4  rounded-md">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
