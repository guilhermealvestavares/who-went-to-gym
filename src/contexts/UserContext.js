import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(
    localStorage?.getItem("isLogged") || false
  );
  const [userInfos, setUserInfos] = useState(
    JSON.parse(localStorage?.getItem("userInfos")) || null
  );

  return (
    <UserContext.Provider
      value={{ isLogged, setIsLogged, userInfos, setUserInfos }}
    >
      {children}
    </UserContext.Provider>
  );
};
