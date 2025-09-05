import axios from "axios";
const apilocal = import.meta.env.VITE_DB_URL_LOCAL;
const apiRender = import.meta.env.VITE_DB_URL_RENDER;

const axiosClient = axios.create({
  baseURL: "https://be-mern-ecommerce-4os7.onrender.com/shoes-shop",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;
