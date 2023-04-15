import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("light");
  const [token] = useState("");

  function saveUser(username) {
    setUsername(username);
    // setSurname(surname);
    localStorage.setItem("@name_user", username);
    // localStorage.setItem("@surname_user", surname);
  }

  function removeUserStorage(){
    localStorage.removeItem("@name_user", "@token")
  }

    function saveToken(token) {
    localStorage.setItem("@token", token);
  }

  return (
    <AuthContext.Provider value={{ username, token, saveUser, theme, setTheme, removeUserStorage, saveToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
