import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { NewRanking } from "./pages/NewRanking";
import { RankingInfos } from "./components";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export const Routes = () => {
  const { isLogged } = useContext(UserContext);

  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="new-ranking" element={<Home />} />
        <Route path="/" />
        <Route path="/login" element={!isLogged ? <Login /> : <Home />}></Route>
        <Route
          path="/new"
          element={!isLogged ? <Login /> : <NewRanking />}
        ></Route>
        <Route path="/rankings/:id" element={<RankingInfos />} />
      </BrowserRoutes>
    </BrowserRouter>
  );
};
