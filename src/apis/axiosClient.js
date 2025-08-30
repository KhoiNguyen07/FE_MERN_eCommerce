import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://techleaf.pro/shoes-shop",
  // baseURL: "http://localhost:8080/shoes-shop",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;
