import { Register } from "./components/Register";
import { Ranking } from "./components/Ranking";
import { Wrapper, Title, Description } from "./App.style";
function App() {
  return (
    <Wrapper>
      <div>
        <Title>Foto de agora (academia) 2023</Title>
        <Description>
          Competição entre amigos para motivar ir à academia
        </Description>
      </div>
      <Register />
      <Ranking />
    </Wrapper>
  );
}

export default App;
