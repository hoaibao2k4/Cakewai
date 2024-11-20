import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from './authSlice';
export default  configureStore ({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
//   window: __REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
})