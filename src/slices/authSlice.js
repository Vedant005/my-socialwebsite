// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialAuth = {
  isLoggedIn: false,
  user: {},
  token: "",
  status: "idle",
  error: null,
};

// Async thunk for login
export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/login`, loginData);
      const data = response.data;
      localStorage.setItem("token", data?.encodedToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

// Async thunk for signup
export const signup = createAsyncThunk(
  "auth/signup",
  async (signData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, signData);
      const data = response.data;
      localStorage.setItem("token", data?.encodedToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    userLogout: (state) => {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
      state.user = {};
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoggedIn = true;
        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoggedIn = true;
        state.user = action.payload.createdUser;
        state.token = action.payload.encodedToken;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { userLogout } = authSlice.actions;
export default authSlice.reducer;
