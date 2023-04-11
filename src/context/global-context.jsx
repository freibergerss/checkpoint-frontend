import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useState("");

  function saveUser(name, surname, token) {
    setName(name);
    setSurname(surname);
    localStorage.setItem("@name_user", name);
    localStorage.setItem("@surname_user", surname);
    localStorage.setItem("@token", token)
  }

  function removeUserStorage(){
    localStorage.removeItem("@name_user", "@surname_user", "@token")
  }

  return (
    <AuthContext.Provider value={{name, surname, token, saveUser, theme, setTheme}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
