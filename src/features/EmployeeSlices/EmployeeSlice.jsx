import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  employees: [],
  employee: null,
};

export const addemployee = createAsyncThunk(
  "addemployee",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/addEmployee",
        data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const viewEmployee = createAsyncThunk(
  "viewEmployee",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/getEmployeeDetails"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const viewSingleEmployee = createAsyncThunk(
  "viewSingleEmployee",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/getEmployee/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "deleteEmployee",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/deleteEmployee/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const editEmployee = createAsyncThunk(
  "editEmployee",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/editEmployee`,
        data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(addemployee.fulfilled, (state, { payload }) => {
        if (payload) {
          toast.success("Successfully Added Employee!!");
          state.employees.push(payload);
        }
      })
      .addCase(addemployee.rejected, (state, { payload }) => {
        toast.error("Something went wrong!!");
      })
      .addCase(deleteEmployee.fulfilled, (state, { payload }) => {
        if (payload) {
          toast.success("Successfully Deleted Employee!!");
          state.employees.push(payload);
        }
      })
      .addCase(deleteEmployee.rejected, (state, { payload }) => {
        toast.error("Something went wrong!!");
      })
      .addCase(editEmployee.fulfilled, (state, { payload }) => {
        if (payload) {
          toast.success("Successfully Updated Employee!!");
          state.employees.push(payload);
        }
      })
      .addCase(editEmployee.rejected, (state, { payload }) => {
        toast.error("Something went wrong!!");
      })
      .addCase(viewSingleEmployee.fulfilled, (state, { payload }) => {
        if (payload) {
          state.employee = payload;
        }
      })
      .addCase(viewSingleEmployee.rejected, (state, { payload }) => {
        toast.error("Something went wrong");
      });
  },
});

export default employeeSlice.reducer;
