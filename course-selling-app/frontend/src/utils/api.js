import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/api", // Replace with your backend URL
});

// Add an interceptor to include the Authorization header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
