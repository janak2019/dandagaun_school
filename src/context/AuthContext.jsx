import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("adminAuth");
    if (saved === "true") setIsAuth(true);
  }, []);

  const login = (username, password) => {
    // SIMPLE DEMO LOGIN (replace with backend later)
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      setIsAuth(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);