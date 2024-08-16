import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../api/Auth";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const loginAction = async ({ username, password }) => {
    const response = await AuthAPI.login({ username, password });
    if (response) {
      setUser(response);
      setToken(response.token);
      localStorage.setItem("token", response.token);
      navigate("/");
      return;
    }
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
