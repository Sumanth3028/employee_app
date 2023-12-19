import React, { useEffect, useRef } from "react";
import Login from "../../Assets/user.png";
import { loginUser } from "../../features/AuthSlices/SignupSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      dispatch(loginUser(registerDetails));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/MainPage");
      }, 1000);
    }
  }, [user]);

  return (
    <div>
      <div className="w-[30%] h-[440px] shadow-lg mx-auto my-[130px] border rounded-md">
        <div className="flex justify-center mt-5 gap-x-2  ">
          <img
            src={Login}
            alt="Nothing here"
            className="w-[6%] h-[5%] mt-8"
          ></img>
          <h1 className=" text-3xl mt-6 font-bold  mb-12 mr-8 text-blue-600 ">
            Login
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
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
            className="w-[85%] py-1 border ml-7 rounded-md mt-2 mb-9 text-center"
            placeholder="Enter password"
            ref={passwordRef}
            required
          />
          <button className="bg-blue-600 text-white px-[140px] py-2 text-lg font-semibold ml-[47px] rounded-md">
            Login
          </button>
          <h2 className="mt-3 ml-[90px] ">
            Don't have an Account ?{" "}
            <a href="/" className="text-blue-700">
              Register{" "}
            </a>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
