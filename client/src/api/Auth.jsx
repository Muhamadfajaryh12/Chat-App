import axios from "axios";
const AuthAPI = (() => {
  const BASE_URL = "http://localhost:3001/api/users";
  const register = async ({ username, password }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        username,
        password,
      });
      console.log(response);
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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    register,
    login,
  };
})();

export { AuthAPI };
