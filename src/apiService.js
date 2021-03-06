import axios from "axios";
// import { toast } from "react-toastify";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  function (request) {
    // Do something before request is sent

    return request;
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // toast.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export default api;
