import axios from "axios";
import ArmazenadorToken from "../../utils/armazenadorToken.js";
let isRefreshing = false;
let refreshSubscribers = [];

function subscribeTokenRefresh(callback) {
  refreshSubscribers.push(callback);
}

function onRefreshed(token) {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
}

const http = axios.create({
  baseURL: "http://localhost:8080/",
});

// Adiciona um interceptador nas requisições
http.interceptors.request.use((config) => {
  const isRefresh =
    config.url?.includes("auth/refresh") || config.url === "/auth/refresh";
  if (!isRefresh) {
    const token = ArmazenadorToken.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

http.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (originalRequest.url.includes("/auth/refresh")) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve) => {
        subscribeTokenRefresh((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(http(originalRequest));
        });
      });
    }

    isRefreshing = true;

    try {
      const refreshToken = ArmazenadorToken.refreshToken;

      const { data } = await axios.get("http://localhost:8080/auth/refresh", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      ArmazenadorToken.definirToken(data.access_token, data.refresh_token);

      const newAccessToken = data.access_token;

      onRefreshed(newAccessToken);

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return http(originalRequest);
    } catch (err) {
      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  },
);

export default http;
