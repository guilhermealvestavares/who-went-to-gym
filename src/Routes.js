import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export const Routes = () => {
  const { isLogged } = useContext(UserContext);

  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={isLogged ? <Home /> : <Login />}></Route>
        <Route path="/login" element={!isLogged ? <Login /> : <Home />}></Route>
      </BrowserRoutes>
    </BrowserRouter>
  );
};
