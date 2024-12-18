// components/AuthCallback.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLoginUser } from '~/redux/apiRequest';

export const GoogleCallBack = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token'); // JWT token
    const refreshToken = params.get('refreshToken'); // Refresh token

    if (token && refreshToken) {
      //localStorage.setItem('authToken', token);
      //localStorage.setItem('refreshToken', refreshToken);

      googleLoginUser(dispatch, refreshToken, token);

      navigate('/', { replace: true });
    } else {
      console.error('Not found Token');
    }
  }, [dispatch, navigate]);
};
