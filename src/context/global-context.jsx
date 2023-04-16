import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useState("");

  function saveUser(username) {
    setUsername(username);
    localStorage.setItem("@username", username);
  }

  function saveToken(token) {
    localStorage.setItem("@token", token)

  }

  function removeUserStorage(){
    localStorage.removeItem("@username", "@token");
    localStorage.removeItem("@token")

  }

  return (
    <AuthContext.Provider value={{username, token, setToken, saveUser, theme, setTheme, saveToken, removeUserStorage}}>
      {children}
    </AuthContext.Provider>
  );

  } 

export default AuthProvider;
