import axios from "axios";
const AuthAPI = (() => {
  const BASE_URL = "http://localhost:3001/api/users";

  const setAccessToken = (token) => {
    localStorage.setItem("access_token", token);
  };
  const getAccessToken = () => {
    return localStorage.getItem("access_token");
  };

  const register = async ({ username, password }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const login = async ({ username, password }) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        username,
        password,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    register,
    login,
    setAccessToken,
  };
})();

export default AuthAPI;
