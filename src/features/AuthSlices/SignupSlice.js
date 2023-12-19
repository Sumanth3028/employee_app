import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  user: localStorage.getItem("user"),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    const response = await axios.post("http://localhost:4000/register", {
      user,
    });
    return response;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    const response = await axios.post("http://localhost:4000/login", {
      user,
    });
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      localStorage.removeItem("email");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        if (payload) {
          toast.success("Successfully Registered!!");
        }
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        toast.error("User already Exists!!");
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const user = payload;
        state.user = user;

        toast.success("Successfully Logged In!!");
        localStorage.setItem("email", user.response);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        toast.error("Invalid Credentials!!");
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
