import response from '~/services/axios';
import { jwtDecode } from 'jwt-decode'; // Fix import
import { refreshToken } from './apiRequest';

export const createInstance = (user, dispatch, stateAuth) => {
  let newInstance = response.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decoded = jwtDecode(user?.access_token);
      if (decoded.exp < date.getTime() / 1000) {
        let data = await refreshToken(user?.refresh_token);
        const refreshUser = {
          ...user,
          access_token: data.access_token,
        };
        dispatch(stateAuth(refreshUser));
        config.headers['Authorization'] = 'Bearer ' + data.access_token;
      }
      return config;
    },
    (err) => Promise.reject(err),
  );

  // Interceptor cho response
  newInstance.interceptors.response.use(
    (response) => {
      // Chỉ trả về phần `data` từ phản hồi
      return response.data;
    },
    (error) => {
      // Nếu có lỗi, trả về phần `data` từ lỗi (nếu có)
      if (error.response) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    },
  );

  return newInstance;
};
