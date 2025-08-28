import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://be-mern-ecommerce-4os7.onrender.com",
  // baseURL: "http://localhost:8080",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;
