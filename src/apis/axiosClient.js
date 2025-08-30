import axios from "axios";
const api = import.meta.env.VITE_DB_URL;

const axiosClient = axios.create({
  baseURL: api,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;
