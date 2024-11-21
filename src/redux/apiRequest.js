import {
  googleFail,
  googleStart,
  googleSuccess,
  loginFail,
  loginStart,
  loginSuccess,
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

export const registerUser = async (dispatch, user, navigator) => {
  dispatch(registerStart());
  try {
    const res = await response.post('/api/public/signup', user);
    dispatch(registerSuccess(res));
    navigator('/auth?mode=signin');
  } catch (err) {
    dispatch(registerFail());
  }
};

export const googleLoginUser = async (dispatch, token) => {
  dispatch(googleStart())
  try {
    const res = await response.get('/api/protected/user/current_user',
      {headers: {Authorization: `Bearer: ${token}`}},
    )
    dispatch(googleSuccess(res))
  }
  catch(err) {
    dispatch(googleFail())
  }
};
