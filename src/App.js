import { Routes } from "./Routes";
import { useState } from "react";
import { Header, Footer } from "./components";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes />
      <Footer />
    </UserProvider>
  );
}

export default App;
