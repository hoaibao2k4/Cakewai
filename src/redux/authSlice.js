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
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.currentUser =  action.payload.code ? action.payload.data : action.payload;
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
    setUser: (state, action) => {
      state.login.currentUser = action.payload
    }
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
  setUser
} = authSlice.actions;
export default authSlice.reducer;
