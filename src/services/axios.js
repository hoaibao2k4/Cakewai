import axios from 'axios';
const BE_BASE_URL = 'http://localhost:8080'
const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default instance;
export {BE_BASE_URL}
