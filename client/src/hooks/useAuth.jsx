import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../api/Auth";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      const response = await AuthAPI.profile(localStorage.getItem("id"));
      setUser(response);
    };
    getProfile();
  }, []);

  const loginAction = async ({ username, password }) => {
    const response = await AuthAPI.login({ username, password });
    if (response) {
      setUser(response.data);
      setToken(response.token);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("token", response.token);
      navigate("/");
      return;
    }
  };

  const logoutAction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setToken("");
    setUser(null);
    navigate("/login");
    return;
  };
  return (
    <AuthContext.Provider value={{ token, user, loginAction, logoutAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
