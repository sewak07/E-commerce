import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

// FORCE token every request (no interceptor risk)
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  console.log("TOKEN BEING SENT:", token); // debug

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

export default instance;