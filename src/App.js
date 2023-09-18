import { Routes } from "./Routes";
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
