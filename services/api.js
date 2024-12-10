// const API_URL = "http://blog.test/v1/backend/api"; 
import axios from "axios";

const API_URL = "http://192.168.1.219/adel/blog/v1/backend/api"; 

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000, 
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// api.interceptors.response.use((response) => response,(error) => {
//     if (error.response && error.response.status === 401) {
//       console.error("Unauthorized! Redirecting to login...");
//       localStorage.removeItem("token"); 
//       window.location.href = "/login";
//       // navigate('/login');
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
