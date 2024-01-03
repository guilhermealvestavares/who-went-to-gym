import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const PurgeUserStorage = () => {
  const { setIsLogged } = useContext(UserContext);

  localStorage.clear();
  setIsLogged(false);
};
