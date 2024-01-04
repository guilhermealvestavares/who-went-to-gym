import { Routes as BrowserRoutes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRegister } from "./pages/NewRegister";
import { NewRanking } from "./pages/NewRanking";
import { RankingInfos } from "./components";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export const Routes = () => {
  const { isLogged } = useContext(UserContext);

  return (
    <BrowserRoutes basename="/who-went-to-gym">
      <Route path="/" element={<Home />} />
      <Route
        path="/novo-ranking"
        element={!isLogged ? <Home /> : <NewRanking />}
      ></Route>
      <Route
        path="/rankings/:id"
        element={!isLogged ? <Home /> : <RankingInfos />}
      />
      <Route
        path="/registrar-treino"
        element={!isLogged ? <Home /> : <NewRegister />}
      />
    </BrowserRoutes>
  );
};
