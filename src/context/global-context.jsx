import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("light");
  const [token] = useState("");

  function saveUser(username) {
    setUsername(username);
    localStorage.setItem("@nameuser", username);
  }

  function saveToken(token) {
    localStorage.setItem("@token", token)

  }

  // function removeUserStorage(){
  //   localStorage.removeItem("@name_user", "@surname_user", "@token")
  // }

  return (
    <AuthContext.Provider value={{username, token, saveUser, theme, setTheme, saveToken}}>
      {children}
    </AuthContext.Provider>
  );

  } 

export default AuthProvider;
