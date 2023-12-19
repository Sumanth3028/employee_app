import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Add from "../../Assets/incorporation.png";
import View from "../../Assets/teamwork.png";
import Exit from "../../Assets/exit.png";
import AddEmployee from "./AddEmployee";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/AuthSlices/SignupSlice";
import ViewEmployee from "./ViewEmployee";
import EditEmployee from "./EditEmployee";

function MainPage() {
  const [id, setId] = useState();
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState(true);
  const [view, setView] = useState(false);
  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();

  const emailCheck = localStorage.getItem("email");

  const handleAddEmployee = () => {
    setDisplay(!display);
    setView(false);
    setEditable(false);
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  const handleViewEmployee = () => {
    setEditable(false);
    setDisplay(false);
    setView(true);
  };
  return (
    <div className="flex">
      {emailCheck && (
        <div
          className={`bg-[#10386c] ${
            open ? "w-[250px]" : "w-16"
          } min-h-screen text-gray-100 duration-500 px-3`}
        >
          <div className="flex py-3 justify-between  ">
            <span
              style={{ transitionDelay: "300ms" }}
              className={`text-xl mt-1 whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Super Admin
            </span>
            <HiMenuAlt2
              size={`${open ? 25 : 90}`}
              className={`cursor-pointer ${open ? "items-end" : "items-start"}`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex">
            <div className="mb-8 gap-y-4 mt-12 flex flex-col relative mx-1">
              <button
                onClick={handleAddEmployee}
                className={`flex items-center text-lg px-1 py-2 rounded-md hover:bg-blue-400 ${
                  open ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <img
                  src={Add}
                  alt="No Image"
                  className="w-[20px] h-[20px]"
                ></img>
                <span
                  style={{ transitionDelay: "300ms" }}
                  className={`ml-2 whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Add Employee
                </span>
              </button>
              <button
                to="/viewEmployee"
                className={`flex items-center text-lg px-1 py-2 rounded-md hover:bg-blue-400 ${
                  open ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <img
                  src={View}
                  alt="No Image"
                  className="w-[20px] h-[20px]"
                ></img>
                <span
                  style={{ transitionDelay: "300ms" }}
                  className={`ml-2 whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                  onClick={handleViewEmployee}
                >
                  Employees Data
                </span>
              </button>
              <Link
                to="/login"
                className={`flex items-center text-lg px-1 py-2 rounded-md hover:bg-blue-400 ${
                  open ? "pointer-events-auto" : "pointer-events-none"
                }`}
                onClick={logoutHandler}
              >
                <img
                  src={Exit}
                  alt="No Image"
                  className="w-[20px] h-[20px]"
                ></img>
                <span
                  style={{ transitionDelay: "300ms" }}
                  className={`ml-2 whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Logout
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
      {emailCheck && display && <AddEmployee open={open} />}
      {view && (
        <ViewEmployee
          setEditable={setEditable}
          setView={setView}
          setDisplay={setDisplay}
          open={open}
          setId={setId}
        />
      )}
      {editable && <EditEmployee open={open} id={id} />}
    </div>
  );
}

export default MainPage;
