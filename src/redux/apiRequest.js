import {
  googleFail,
  googleStart,
  googleSuccess,
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
import response from '~/services/axios';

export const loginUser = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await response.post('/api/public/login', user);
    dispatch(loginSuccess(res));
    navigate('/');
  } catch (err) {
    dispatch(loginFail());
  }
};

export const logOutUser = async (dispatch, token, navigate) => {
  dispatch(logOutStart());
  try {
    await response.post('/api/public/logout', { refresh_token: token });
    dispatch(logOutSuccess());
    navigate('/');
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

export const googleLoginUser = async (dispatch, token) => {
  dispatch(googleStart());
  try {
    const res = await response.get('/api/protected/user/current_user', {
      headers: { Authorization: `Bearer: ${token}` },
    });
    dispatch(googleSuccess(res));
  } catch (err) {
    dispatch(googleFail());
  }
};

export const refreshToken = async (token) => {
  try {
    const res = await response.post('/api/public/refreshtoken', { refresh_token: token });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
