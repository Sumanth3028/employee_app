import SignUpForm from "./components/Auth/SignUpForm";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/Auth/LoginForm";
import { Toaster } from "react-hot-toast";
import MainPage from "./components/employee/MainPage";
import AddEmployee from "./components/employee/AddEmployee";
import ViewEmployee from "./components/employee/ViewEmployee";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/MainPage" element={<MainPage />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
