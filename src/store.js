import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/AuthSlices/SignupSlice";
import EmployeeSlice from "./features/EmployeeSlices/EmployeeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    employee: EmployeeSlice,
  },
});
