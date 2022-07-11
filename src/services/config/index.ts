import axios, { AxiosError, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_VIBONUS_API_HOST}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
let token: string = localStorage.getItem("auth") + "";
if (token) {
  setToken(token);
}
// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    // const data: any = error.response?.data;
    // if (data.error.code === 0) {
    //   return;
    // }
    return Promise.reject(error);
  }
);
