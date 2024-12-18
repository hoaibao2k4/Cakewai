import {response} from '~/services/axios';
import { jwtDecode } from 'jwt-decode'; // Fix import
import { refreshToken, renewToken } from './apiRequest';

export const createInstance = (user, dispatch, stateAuth) => {
  let newInstance = response.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwtDecode(user?.access_token);
      const decodedRefresh = jwtDecode(user?.refresh_token);
      if ((decodedRefresh.exp + 60) < date.getTime() / 1000) {
        let res = await refreshToken(user?.refresh_token)
        const refreshUser = {
          access_token: res.access_token,
          refresh_token: res.refresh_token
        }
        dispatch(stateAuth(refreshUser))
        config.headers['Authorization'] = 'Bearer ' + data.access_token;
      }
      else if (decodedToken.exp < date.getTime() / 1000) {
        let data = await renewToken(user?.refresh_token);
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
