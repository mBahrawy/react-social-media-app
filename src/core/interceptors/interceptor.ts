import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Request interceptor
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const configClone = { ...config };
    return configClone;
  },
  (error: Error) => {
    Promise.reject(error);
  }
);

// Response interceptor
http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const errorMsg = `Error Code: ${error.response?.status},  Message: ${error.response?.data}`;
    // eslint-disable-next-line no-console
    console.log(errorMsg);
    return Promise.reject(error);
  }
);

export default http;
