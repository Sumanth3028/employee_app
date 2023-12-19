import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteEmployee,
  viewEmployee,
  viewSingleEmployee,
} from "../../features/EmployeeSlices/EmployeeSlice";
import {
  MdOutlineEmail,
  MdLocalPhone,
  MdModeEdit,
  MdDeleteOutline,
  MdOutlineRefresh,
} from "react-icons/md";

const ViewEmployee = (props) => {
  const [data, setData] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  const dispatch = useDispatch();

  const getEmployeeData = () => {
    dispatch(viewEmployee()).then((res) => {
      setData(res.payload);
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
    getEmployeeData();
  };

  const handleEdit = (id) => {
    props.setEditable(true);
    props.setView(false);
    props.setDisplay(false);
    props.setId(id);
    dispatch(viewSingleEmployee(id));
  };

  useEffect(() => {
    getEmployeeData();
    if (refreshData) {
      setRefreshData(false);
    }
  }, [data]);

  const refreshDataManually = () => {
    setRefreshData(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-x-9">
        <h1
          className={`${
            props.open
              ? "ml-[60px] text-4xl font-semibold mt-9"
              : "ml-[114px] text-4xl font-semibold mt-9"
          }`}
        >
          <span className="text-[#ea5827] mb-5">
            {data.length ? data.length : 0}
          </span>{" "}
          Employees
        </h1>
        <button
          className="mr-9 px-5 py-2 border border-5 border-black mt-9 flex items-center gap-x-1 justify-between rounded-md bg-blue-200"
          onClick={refreshDataManually}
        >
          <span>
            <MdOutlineRefresh size={25} />
          </span>{" "}
          Refresh
        </button>
      </div>
      <div className="grid grid-cols-3  gap-y-[65px] mt-10">
        {data.map((employee) => (
          <div>
            <div
              className={`${
                props.open
                  ? "w-[300px] h-[280px] shadow-md bg-gray-100 rounded-md mx-[60px] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110"
                  : "w-[300px] h-[280px] shadow-md bg-gray-100 rounded-md mx-[110px] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110"
              }`}
            >
              <div>
                <h1 className="text-left text-2xl pl-3 pt-6 flex justify-between ml-3 items-center">
                  {employee.firstName.toLowerCase()}{" "}
                  {employee.lastName.toLowerCase()}
                  {/* <span className="flex gap-x-2">
                    <MdModeEdit size={18} />
                    <MdDeleteOutline size={18} className="mr-6" />
                  </span> */}
                </h1>
                <h2 className="ml-6 text-gray-400 mt-1 text-md text-left">
                  {employee.department}
                </h2>
              </div>
              <div className="bg-white w-[90%] mx-auto h-[45%] mt-2  rounded-md">
                <h2 className="py-6 px-6 flex text-center items-center gap-x-2 text-sm inherit">
                  <MdOutlineEmail className="mt-1" size={17} />
                  {employee.emailId.length > 20
                    ? employee.emailId.slice(0, employee.emailId.length / 2) +
                      "..."
                    : employee.emailId}
                </h2>
                <h2 className="py-2 px-6 flex text-center items-center gap-x-2">
                  <MdLocalPhone className="mt-1" size={17} />
                  {employee.phoneNumber}
                </h2>
              </div>
              <div className="flex justify-start gap-x-5 my-3 ml-4">
                <button
                  className="px-6 py-1 bg-yellow-600 rounded-md flex items-center gap-x-2 font-semibold text-white"
                  onClick={() => handleEdit(employee.id)}
                >
                  <span>
                    <MdModeEdit size={15} />
                  </span>{" "}
                  Update
                </button>
                <button
                  className="px-6 py-1 bg-red-600 rounded-md flex items-center gap-x-2 font-semibold text-white"
                  onClick={() => handleDelete(employee.id)}
                >
                  <span>
                    <MdDeleteOutline size={15} />
                  </span>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewEmployee;
