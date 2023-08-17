import { Routes } from "./Routes";
import { useState } from "react";
import { Header } from "./components/Header";
import { UserProvider } from "./contexts/UserContext";
function App() {
  return (
    <UserProvider>
      <Header />
      <Routes />
    </UserProvider>
  );
}

export default App;
