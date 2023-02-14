import { Register } from "./components/Register";
import { Wrapper, Title, Description } from "./App.style";
function App() {
  return (
    <Wrapper>
      <div>
        <Title>Foto de agora (academia) 2023</Title>
        <Description>
          Competição entre amigos para motivar a ir à academia
        </Description>
      </div>
      <Register />
    </Wrapper>
  );
}

export default App;
