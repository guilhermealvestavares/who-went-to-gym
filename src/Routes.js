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
    <BrowserRoutes basename="/who-went-to-gym">
      <Route path="old-ranking" element={<Home />} />
      <Route path="/who-went-to-gym" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={!isLogged ? <Home /> : <Home />}></Route>
      <Route
        path="/novo-ranking"
        element={!isLogged ? <Home /> : <NewRanking />}
      ></Route>
      <Route
        path="/rankings/:id"
        element={!isLogged ? <Home /> : <RankingInfos />}
      />
      <Route
        path="registrar-treino"
        element={!isLogged ? <Home /> : <NewRegister />}
      />
    </BrowserRoutes>
  );
};
