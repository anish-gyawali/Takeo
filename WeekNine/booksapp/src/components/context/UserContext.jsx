import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { getUserData } from "../../api";
export const UserContext = React.createContext({
  user: {},
  token: null,
  login: () => {},
  logout: () => {},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const loginHandler = (username, password) => {
    getUserData().then((data) => {
      console.log(data);
      setUser(data);
      setToken(data?.login?.uuid);
      localStorage.setItem("token", data?.login?.uuid);
    });
  };
  const logoutHandler = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const tokenLS = localStorage.getItem("token");
    if (!token && tokenLS) {
      setToken(tokenLS);
    }
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        token,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
