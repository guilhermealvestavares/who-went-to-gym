import { Routes as BrowserRoutes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { NewRegister } from "./pages/NewRegister";
import { NewRanking } from "./pages/NewRanking";
import { RankingInfos } from "./components";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export const Routes = () => {
  const { isLogged } = useContext(UserContext);

  return (
    <BrowserRoutes>
      <Route path="old-ranking" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={!isLogged ? <Login /> : <Home />}></Route>
      <Route
        path="/new"
        element={!isLogged ? <Login /> : <NewRanking />}
      ></Route>
      <Route path="/rankings/:id" element={<RankingInfos />} />
      <Route path="registrar-treino" element={<NewRegister />} />
    </BrowserRoutes>
  );
};
