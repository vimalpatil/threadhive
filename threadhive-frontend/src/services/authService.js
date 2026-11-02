import { apiRequest } from "../api/apiClient.js";
import { AUTH_API } from "../config/apiConfig.js";

export const login = async (credentials) => {
  const res = await apiRequest(AUTH_API.LOGIN, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return res.data;
};

export const register = async (formData) => {
  const res = await apiRequest(AUTH_API.REGISTER, {
    method: "POST",
    body: JSON.stringify(formData),
  });
  return res.data;
};
