import axios from "axios";

const api = axios.create({
  baseURL: "https://683951076561b8d882afd70c.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
