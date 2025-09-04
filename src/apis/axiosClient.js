import axios from "axios";
const api = import.meta.env.VITE_DB_URL;

const axiosClient = axios.create({
  // baseURL: "https://techleaf.pro/shoes-shop",
  // baseURL: "http://localhost:8080/shoes-shop",
  baseURL: "https://be-mern-ecommerce-4os7.onrender.com/shoes-shop",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;
