import axios from "axios";
import { ENV } from "~/assets/ENV/ENV.js";

const axiosClient = axios.create({
  baseURL: ENV.dbURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;
