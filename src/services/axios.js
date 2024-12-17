import axios from 'axios';

const BE_BASE_URL = 'http://localhost:8080'
const response = axios.create({
  baseURL: 'http://localhost:8080', // URL cho localhost
});


response.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);


export { response, BE_BASE_URL };
