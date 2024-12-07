import response from '~/services/axios';
import { jwtDecode } from 'jwt-decode';
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
        config.headers['token'] = 'Bearer' + data.access_token;
      }
      return config;
    },
    (err) => {
      Promise.reject(err);
    },
  );
  return newInstance
};
