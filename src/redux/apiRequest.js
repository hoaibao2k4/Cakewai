import {
  loginFail,
  loginStart,
  loginSuccess,
  logOutFail,
  logOutStart,
  logOutSuccess,
  registerFail,
  registerStart,
  registerSuccess,
} from './authSlice';
import {response} from '~/services/axios';
import { toast } from "react-toastify";
export const loginUser = async (dispatch, user, navigate, redirectPath = '/') => {
  dispatch(loginStart());
  try {
    const res = await response.post('/api/public/login', user);
    dispatch(loginSuccess(res));
    navigate(redirectPath);
  } catch (err) {
    dispatch(loginFail());
    toast.error('Đăng nhập thất bại')
  }
};

export const logOutUser = async (dispatch, token, navigate, redirectPath = '/auth?mode=signin') => {
  dispatch(logOutStart());
  try {
    await response.post('/api/public/logout', { refresh_token: token });
    dispatch(logOutSuccess());
    navigate(redirectPath)
  } catch (err) {
    console.log(err);
    dispatch(logOutFail());
  }
};

export const registerUser = async (dispatch, user, navigator) => {
  dispatch(registerStart());
  try {
    await response.post('/api/public/signup', user);
    dispatch(registerSuccess());
    navigator('/auth?mode=signin');
  } catch (err) {
    if (err.response) {
        console.error('Server error:', err.response.status, err.response.data);
    } else {
        console.error('Request error:', err.message);
    }
    dispatch(registerFail());
}
};

export const googleLoginUser = async (dispatch, refToken) => {
  dispatch(loginStart());
  try {
    const res = await response.get('/api/protected/user/current_user', {
      headers: { Authorization: `Bearer ${refToken}` },
    });
    dispatch(loginSuccess(res));
  } catch (err) {
    dispatch(loginFail());
  }
};

export const renewToken = async (token) => {
  try {
    const res = await response.post('/api/public/renew_access', { refresh_token: token });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const refreshToken = async (token) => {
  try {
    const res = await response.post('/api/public/renew_refresh', {refresh_token: token})
    return res.data
  } catch(err) {
    console.log(err)
  }
}