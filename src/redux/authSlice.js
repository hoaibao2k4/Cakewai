import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      success: false,
      isFetching: false,
      error: false,
    },
    google: {
      isFetching: false,
      error: false,
      user: null,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.currentUser = action.payload.data;
      state.login.isFetching = false;
      state.login.error = false;
    },
    loginFail: (state) => {
      state.login.error = true;
    },
    logOutStart: (state) => {
      state.login.isFetching = true;
    },
    logOutSuccess: (state) => {
      state.login.currentUser = null;
      state.login.isFetching = false;
      state.login.error = false;
    },
    logOutFail: (state) => {
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.success = true;
      state.register.isFetching = false;
      state.register.error = false;
    },
    registerFail: (state) => {
      state.register.error = true;
    },
    googleStart: (state) => {
      state.google.isFetching = true;
    },
    googleSuccess: (state, action) => {
      state.google.user = action.payload;
      state.google.isFetching = false;
      state.google.error = false;
    },
    googleFail: (state) => {
      state.google.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  logOutStart,
  logOutSuccess,
  logOutFail,
  registerFail,
  registerStart,
  registerSuccess,
  googleSuccess,
  googleFail,
  googleStart,
} = authSlice.actions;
export default authSlice.reducer;
