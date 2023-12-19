import React, { useRef } from "react";
import Register from "../../Assets/register.png";

import { useDispatch } from "react-redux";
import { registerUser } from "../../features/AuthSlices/SignupSlice";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      dispatch(registerUser(registerDetails));

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="w-[30%] h-[520px] shadow-lg mx-auto my-[90px] border rounded-md">
        <div className="flex justify-center mt-5 gap-x-2  ">
          <img
            src={Register}
            alt="No Image"
            className="w-[6%] h-[5%] mt-8"
          ></img>
          <h1 className=" text-3xl mt-6 font-bold  mb-12 mr-8 text-blue-600 ">
            Regsiter
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className=" text-xl ml-7  ">
            Name
          </label>
          <input
            type="text"
            className="w-[85%] py-1 border ml-7 rounded-md mt-2 mb-4 text-center"
            placeholder="enter your name"
            ref={nameRef}
            required
          />

          <label htmlFor="email" className=" text-xl ml-7  ">
            Email Id
          </label>
          <input
            type="email"
            className="w-[85%] py-1 border ml-7 rounded-md mt-2 mb-4 text-center"
            placeholder="Enter email id"
            ref={emailRef}
            required
          />
          <label htmlFor="password" className=" text-xl ml-7  ">
            Password
          </label>
          <input
            type="password"
            className="w-[85%] py-1 border ml-7 rounded-md mt-2 mb-8 text-center"
            placeholder="Enter password"
            ref={passwordRef}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-[140px] py-2 text-lg font-semibold ml-[39px] rounded-md"
          >
            Register
          </button>
          <h2 className="mt-3 ml-[90px] ">
            Already have an Account ?{" "}
            <a href="/login" className="text-blue-700">
              login
            </a>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
