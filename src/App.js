import { Routes } from "./Routes";
import { Header, Footer } from "./components";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <Routes />
      <Footer />
    </UserProvider>
  );
}

export default App;
