import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
});
